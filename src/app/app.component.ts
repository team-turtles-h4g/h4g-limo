import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import EsriConfig from "@arcgis/core/config";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { HttpClient } from '@angular/common/http';
import Search from "@arcgis/core/widgets/Search";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import Legend from "@arcgis/core/widgets/Legend";
import Compass from '@arcgis/core/widgets/Compass';
import { animate, style, transition, trigger } from '@angular/animations';
import TimeSlider from "@arcgis/core/widgets/TimeSlider";
import TimeInterval from "@arcgis/core/TimeInterval";
import TimeExtent from "@arcgis/core/TimeExtent";
import moment from 'moment';
import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils";
import PopupTemplateProperties from "@arcgis/core/PopupTemplate";
import FeatureReductionCluster from "@arcgis/core/layers/support/FeatureReductionCluster";
import VisualVariable from "@arcgis/core/renderers/visualVariables/VisualVariable";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

interface Legends {
  id: number;
  name: string;
  isChecked: boolean;
}

enum MapLayerType {
  Chemicals,
  ProtectedAreas,
  Municipalities,
  GreenHouses
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':leave',
          [
            animate('1s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent implements OnInit {
  title = 'Limo';
  map: Map | undefined;
  view: MapView | undefined;
  mapDiv: HTMLDivElement | undefined;
  layer: FeatureLayer;
  layerinfo: FeatureLayer;
  legend: any;
  timeSlider: TimeSlider;
  featureReductionCluster: FeatureReductionCluster | undefined;
  visualVariables: VisualVariable;

  checmicalLayer: FeatureLayer;
  protectedAreaLayer: FeatureLayer;
  municipalityLayer: FeatureLayer;
  greenHouseLayer: FeatureLayer;
  showLandingBanner: boolean = true;

  LegendsData: Legends[] = [
    { id: 0, name: 'Chemicals', isChecked: true },
    { id: 1, name: 'Protected Areas', isChecked: true },
    { id: 2, name: 'Municipalities', isChecked: true },
    { id: 3, name: 'Green Houses', isChecked: true }
  ];
  LayerInfo = [];  
  waterquality: number;
  plantgrowth: number;
  originpoint: string;

  chemicalList = [];
  mapViewList = [];
  monthList = [
    {
      viewValue: "JAN - 2019",
      value: 1
    }
  ];

  filteredChemicalValue: string;
  startTimeExtent: string;
  endTimeExtent: string;

  constructor(private http: HttpClient) {
    this.http.get("./assets/chemicals.json").subscribe((_chemList: any) => {
      this.chemicalList = _chemList;
    });
    this.http.get("./assets/MapView.json").subscribe((_MapViewList: any) => {
      this.mapViewList = _MapViewList;
    })
  }

  ngOnInit() {

    setTimeout(() => {
      this.showLandingBanner = false;
    }, 8000);

    this.SetKPIPercentage();
    this.originpoint = "4.288, 52.078";

    EsriConfig.apiKey = environment.esriConfigApiKey;

    const mapDivInterval = setInterval(() => {
      const _mapDiv = <HTMLDivElement>document.getElementById("viewDiv");
      if (_mapDiv) {
        clearInterval(mapDivInterval);
        this.mapDiv = _mapDiv;

        this.map = new Map({
          basemap: "arcgis-community" // Basemap layer service
        });

        // this.map.on("load", function() {
        //   //after map loads, connect to listen to mouse move & drag events
        //   this.map.on("mouse-move", this.showCoordinates());
        //   this.map.on("mouse-drag", showCoordinates);
        // });

        this.changeMapView();

        //#region Filter for Chemical Layer
        var filter = document.getElementById("chemicalFilter");
        // filters the layer using a definitionExpression
        // based on a religion selected by the user
        filter.addEventListener("change", (evt: any) => {
          this.filteredChemicalValue = evt.target.value;
          this.updateDefinitionExpression();
        });
        //#endregion

        //#region Filter for Map View
        var MapViewfilter = document.getElementById("mapViewFilter");
        // filters the layer using a definitionExpression
        // based on a religion selected by the user
        MapViewfilter.addEventListener("change", (evt: any) => {
          var newValue = evt.target.value;
          this.updateMapView(newValue);
        });
        //#endregion

        //#region Time slider
        // const timeSlider = new TimeSlider({
        //   container: "timeSliderDiv",
        //   mode: "cumulative-from-start",
        //   timeVisible: true,
        //   loop: true
        // });
        this.timeSlider = new TimeSlider({
          container: "timeSliderDiv",
          mode: "time-window",
          timeVisible: true,
          loop: true
        });

        // wait until the layer view is loaded
        this.view.whenLayerView(this.checmicalLayer).then((lv) => {
          this.timeSlider.fullTimeExtent = this.checmicalLayer.timeInfo.fullTimeExtent.expandTo("months");
          this.timeSlider.stops = {
            interval: new TimeInterval({
              unit: 'months',
              value: 1
            })
          };

          // set up time slider properties based on layer timeInfo
          this.timeSlider.timeExtent = new TimeExtent({
            start: '01/01/2020',
            end: "01/01/2021"
          });
        });
        //#endregion
        this.timeSlider.watch("timeExtent", () => {
          this.startTimeExtent = moment(this.timeSlider.timeExtent.start).format("MM/DD/YYYY hh:mm A");
          this.endTimeExtent = moment(this.timeSlider.timeExtent.end).format("MM/DD/YYYY hh:mm A");
          this.updateDefinitionExpression();
        });

        this.view.ui.add(this.timeSlider, {
          position: "bottom-left",
          index: 3
        });
        //#endregion

        //#region Heatmap
        // let heatmapParams: any = {
        //   layer: layer,
        //   view: this.view,
        //   field: "Numeriekew"
        // };

        // heatmapRendererCreator.createRenderer(heatmapParams).then(function (response: any) {
        //   console.log(response);
        //   // Reset the minimum of the statistics as the heatmap will define color range linearly between
        //   // min and max
        //   // response.statistics.min = response.statistics.max*0.8;
        //   layer.renderer = response.renderer;
        // });

        // this.map.add(layer);
        //#endregion
      }
    }, 300);
  }

  changeMapView() {
    this.view = new MapView({
      map: this.map,
      center: [4.288788, 52.078663], // Longitude, latitude
      zoom: 11, // Zoom level
      container: this.mapDiv // Div element,
    });
    
    //#region KPI indicator
    this.view.watch('zoom', (_newValue, _oldValue) => {
      this.SetKPIPercentage();
      //console.log(this.view.center.latitude);
      this.originpoint = this.view.center.longitude.toFixed(3)  + ', ' + this.view.center.latitude.toFixed(3);
    });
    //#endregion

    //#region Add Compass to view
    let compass = new Compass({
      view: this.view
    });
    this.view.ui.add(compass, "top-left");
    //#endregion

    //#region Search Widget
    const searchWidget = new Search({
      view: this.view
    });

    // Add the search widget to the top right corner of the view
    this.view.ui.add(searchWidget, {
      position: "top-left"
    });
    //#endregion

    this.view.ui.add(this.timeSlider, {
      position: "bottom-left",
      index: 3
    });

    //#region Chemical Layer
    this.GetLayer(MapLayerType.Chemicals);
    //this.map.add(this.checmicalLayer, MapLayerType.Chemicals);
    //#endregion

    //#region Protected Areas Layer
    this.GetLayer(MapLayerType.ProtectedAreas);
    //this.map.add(this.protectedAreaLayer, MapLayerType.ProtectedAreas);
    //#endregion

    //#region Protected Areas Layer
    this.GetLayer(MapLayerType.Municipalities);
    //this.map.add(this.municipalityLayer, MapLayerType.Municipalities);
    //#endregion

    //#region Green house Layer
    this.GetLayer(MapLayerType.GreenHouses);
    //#endregion

    //#region Add Legends
    const legend = new Legend({
      view: this.view,
      layerInfos: this.LayerInfo
    });
    this.legend = legend;
    this.view.ui.add(legend, "bottom-left");
    //#endregion
  }

  showCoordinates(evt: any) {
    var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
    //display mouse coordinates
      //mp.x.toFixed(3) + ", " + mp.y.toFixed(3);
  }

  updateDefinitionExpression() {
    let chemicalDefExpression = this.filteredChemicalValue
      ? `Paramete_2 = '${this.filteredChemicalValue}'` : null;
    let dateDefExpression = `Resultaatd >= '${this.startTimeExtent}' AND Resultaatd <= '${this.endTimeExtent}'`;

    let definitionExpression = chemicalDefExpression
      ? `${chemicalDefExpression} AND ${dateDefExpression}` : dateDefExpression;
    this.checmicalLayer.definitionExpression = definitionExpression;
    // (<any>this.map).infoWindow.hide();
  }

  updateMapView(value) {
    this.map = new Map({
      basemap: value // Basemap layer service
    });
    this.changeMapView();
  }

  onChange(event, id: number) {
    if (event.currentTarget.checked) {
      //this.map.layers.add(this.GetLayer(id), id);
      this.GetLayer(id);
    } else {
      this.map.layers.removeAt(id);
    }
    this.view.ui.add(this.legend, "bottom-left");
  }

  GetLayer(EnumMapLayerType: MapLayerType): FeatureLayer {
    let retlayer: any;
    switch (EnumMapLayerType) {
      case MapLayerType.Chemicals:
        this.checmicalLayer = new FeatureLayer({
          url: "https://services3.arcgis.com/jNF04dtssnue8VcP/arcgis/rest/services/measure_locations_shortv/FeatureServer/0",
          outFields: ["Paramete_2", "Paramete_3", "MonsterC_1"],
          // popupTemplate: {
          //   title: "{Paramete_2} - {Paramete_1}",
          //   content: [
          //     {
          //       type: "fields",
          //       fieldInfos: [
          //         {
          //           fieldName: "Paramete_3",
          //           label: "Chemical Bond"
          //         },
          //         {
          //           fieldName: "MonsterC_1",
          //           label: "Measurement taken from"
          //         },
          //         {
          //           fieldName: "Resultaatd",
          //           label: "Result Date"
          //         },
          //         {
          //           fieldName: "Numeriekew",
          //           label: "Value"
          //         }
          //       ]
          //     }
          //   ]
          // },
          featureReduction: {
            type: "cluster",
            popupEnabled: true,
            popupTemplate: {
              content: [
              //   {
              //   type: "text",
              //   //text: "This cluster represents <b>{Paramete_3}</b> weather stations."
              // }, 
              {
                type: "fields",
                fieldInfos: [{
                  fieldName: "Paramete_3",
                  label: "Chemical Bond",
                  format: {
                    places: 0
                  }
                }, {
                  fieldName: "MonsterC_1",
                  label: "Measurement taken from",
                  format: {
                    places: 0
                  }
                }, {
                  fieldName: "Resultaatd",
                  label: "Result Date",
                  format: {
                    places: 0
                  }
                },{
                  fieldName: "Numeriekew",
                  label: "Value",
                  format: {
                    places: 0
                  }
                }]
              }]
            }
          },
          // renderer: {
          //   authoringInfo: {
          //     visualVariables: [{
          //       type: "color",
          //       field: "Paramete_3",
          //     },
          //     {
          //       type: "size",
          //       field: "Numeriekew",
          //     }]
          //   }
          // }
        });
        
        this.map.layers.add(this.checmicalLayer, MapLayerType.Chemicals);
        this.LayerInfo.push({layer: this.checmicalLayer, title: "Chemicals Measurement"});
        break;
      case MapLayerType.ProtectedAreas:
        const renderer = new SimpleRenderer({
          symbol: new SimpleLineSymbol({
            width: 1.5,
            color: "#4169E1",
            style: 'dash'
          }),
        });
        this.protectedAreaLayer = new FeatureLayer({
          url: "https://services3.arcgis.com/jNF04dtssnue8VcP/arcgis/rest/services/protected_areas/FeatureServer/0",
          renderer: renderer,
          opacity: 20
        });
        this.map.layers.add(this.protectedAreaLayer, MapLayerType.ProtectedAreas);
        this.LayerInfo.push({layer: this.protectedAreaLayer, title: "Protected Areas"});
        break;
      case MapLayerType.Municipalities:
        const mrenderer = new SimpleRenderer({
          symbol: new SimpleLineSymbol({
            width: 1.5,
            color: "#E53935", //#A7586A
            style: "solid"
          })
        });

        this.municipalityLayer = new FeatureLayer({
          url: "https://services3.arcgis.com/jNF04dtssnue8VcP/arcgis/rest/services/municipalities/FeatureServer/0",
          renderer: mrenderer
        });
        this.map.layers.add(this.municipalityLayer, MapLayerType.Municipalities);
        this.LayerInfo.push({layer: this.municipalityLayer, title: "Municipalities"});
        break;
      case MapLayerType.GreenHouses:
        const Grenderer = new SimpleRenderer({
          symbol: new SimpleFillSymbol({
            color: "#81C784"
          })
        });

        this.greenHouseLayer = new FeatureLayer({
          url: "https://services3.arcgis.com/jNF04dtssnue8VcP/arcgis/rest/services/greenhouses_data/FeatureServer/0",
          renderer: Grenderer,
          geometryType: "polygon",
        });
        this.map.layers.add(this.greenHouseLayer, MapLayerType.GreenHouses);
        this.LayerInfo.push({layer: this.greenHouseLayer, title: "Green Houses"});
        break;
    }
    return retlayer;
  }

  SetKPIPercentage() {
    this.waterquality = Math.floor(Math.random() * 100);
    this.plantgrowth = Math.floor(Math.random() * 100);
    //this.originpoint = Math.floor(Math.random() * 100);
  }

}
