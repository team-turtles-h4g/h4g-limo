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
  waterquality: number;
  plantgrowth: number;
  originpoint: string;

  chemicalList = [];
  monthList = [
    {
      viewValue: "JAN - 2019",
      value: 1
    }
  ];

  constructor(private http: HttpClient) {
    this.http.get("./assets/chemicals.json").subscribe((_chemList: any) => {
      this.chemicalList = _chemList;
    });
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

        this.view = new MapView({
          map: this.map,
          center: [4.288788, 52.078663], // Longitude, latitude
          zoom: 11, // Zoom level
          container: this.mapDiv // Div element,
        });
        
        //#region KPI indicator
        this.view.watch('zoom', (_newValue, _oldValue) => {
          this.SetKPIPercentage();
          this.originpoint = parseFloat(_newValue).toFixed(3)  + ', ' + parseFloat(_oldValue).toFixed(3);
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

        //#region Chemical Layer
        this.checmicalLayer = this.GetLayer(MapLayerType.Chemicals);
        this.map.add(this.checmicalLayer, MapLayerType.Chemicals);
        //#endregion

        //#region Protected Areas Layer
        this.protectedAreaLayer = this.GetLayer(MapLayerType.ProtectedAreas);
        this.map.add(this.protectedAreaLayer, MapLayerType.ProtectedAreas);
        //#endregion

        //#region Protected Areas Layer
        this.municipalityLayer = this.GetLayer(MapLayerType.Municipalities);
        this.map.add(this.municipalityLayer, MapLayerType.Municipalities);
        //#endregion

        //#region Green house Layer
        this.greenHouseLayer = this.GetLayer(MapLayerType.GreenHouses);
        this.map.add(this.greenHouseLayer, MapLayerType.GreenHouses);
        //#endregion

        //#region Filter for Chemical Layer
        var filter = document.getElementById("chemicalFilter");
        // filters the layer using a definitionExpression
        // based on a religion selected by the user
        filter.addEventListener("change", (evt: any) => {
          var newValue = evt.target.value;
          this.updateDefinitionExpression(newValue);
        });
        //#endregion

        //#region Legends
        const legend = new Legend({
          view: this.view,
          layerInfos: [
            {
              layer: this.greenHouseLayer,
              title: "Green Houses"
            },
            {
              layer: this.municipalityLayer,
              title: "Municipalities"
            },
            {
              layer: this.protectedAreaLayer,
              title: "Protected Areas"
            },
            {
              layer: this.checmicalLayer,
              title: "Chemicals Measurement"
            }
          ]
        });

        this.view.ui.add(legend, "bottom-left");
        //#endregion

        //#region Time slider
        const timeSlider = new TimeSlider({
          container: "timeSliderDiv",
          mode: "cumulative-from-start",
          timeVisible: true,
          loop: true
        });
        this.view.ui.add(timeSlider, {
          position: "bottom-left",
          index: 3
        });

        // wait until the layer view is loaded
        this.view.whenLayerView(this.checmicalLayer).then((lv) => {
          timeSlider.fullTimeExtent = this.checmicalLayer.timeInfo.fullTimeExtent.expandTo("months");
          timeSlider.stops = {
            interval: new TimeInterval({
              unit: 'months',
              value: 1
            })
          };

          // set up time slider properties based on layer timeInfo
          timeSlider.timeExtent = new TimeExtent({
            start: null,
            end: "01/01/2021"
          });
        });

        timeSlider.watch("timeExtent", () => {
          let triggeredDate = moment(timeSlider.timeExtent.end).format("MM/DD/YYYY hh:mm A");
          this.checmicalLayer.definitionExpression =
            `Resultaatd >= '12/31/2019 11:59 PM' and Resultaatd <= '${triggeredDate}'`;
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

  updateDefinitionExpression(value) {
    let definitionExpression = value ? `Paramete_2 = '${value}'` : null;
    this.checmicalLayer.definitionExpression = definitionExpression;
    // (<any>this.map).infoWindow.hide();
  }

  onChange(event, id: number) {
    if (event.currentTarget.checked) {
      this.map.layers.add(this.GetLayer(id), id);
    } else {
      this.map.layers.removeAt(id);
    }
  }

  GetLayer(EnumMapLayerType: MapLayerType): FeatureLayer {
    let retlayer: any;
    switch (EnumMapLayerType) {
      case MapLayerType.Chemicals:
        retlayer = new FeatureLayer({
          url: "https://services3.arcgis.com/jNF04dtssnue8VcP/arcgis/rest/services/measure_locations_shortv/FeatureServer/0",
          outFields: ["Paramete_2", "Paramete_3", "MonsterC_1"],
          popupTemplate: {
            title: "{Paramete_2} - {Paramete_1}",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "Paramete_3",
                    label: "Chemical Bond"
                  },
                  {
                    fieldName: "MonsterC_1",
                    label: "Measurement taken from"
                  },
                  {
                    fieldName: "Resultaatd",
                    label: "Result Date"
                  },
                  {
                    fieldName: "Numeriekew",
                    label: "Value"
                  }
                ]
              }
            ]
          }
          // featureReduction: {
          //   type: "cluster"
          // },
        });
        break;
      case MapLayerType.ProtectedAreas:
        const renderer = new SimpleRenderer({
          symbol: new SimpleLineSymbol({
            width: 1.5,
            color: "#00CDEF",
            style: 'short-dash-dot'
          }),
        });
        retlayer = new FeatureLayer({
          url: "https://services3.arcgis.com/jNF04dtssnue8VcP/arcgis/rest/services/protected_areas/FeatureServer/0",
          renderer: renderer,
          opacity: 20
        });
        break;
      case MapLayerType.Municipalities:
        const mrenderer = new SimpleRenderer({
          symbol: new SimpleLineSymbol({
            width: 1,
            color: "#A7586A",
            style: "solid"
          })
        });

        retlayer = new FeatureLayer({
          url: "https://services3.arcgis.com/jNF04dtssnue8VcP/arcgis/rest/services/municipalities/FeatureServer/0",
          renderer: mrenderer
        });
        break;
      case MapLayerType.GreenHouses:
        const Grenderer = new SimpleRenderer({
          symbol: new SimpleFillSymbol({
            color: "#81C784"
          })
        });

        retlayer = new FeatureLayer({
          url: "https://services3.arcgis.com/jNF04dtssnue8VcP/arcgis/rest/services/greenhouses_data/FeatureServer/0",
          renderer: Grenderer,
          geometryType: "polygon",
        });
        break;
    }
    return retlayer;
  }

  SetKPIPercentage() {
    this.waterquality = Math.floor(Math.random() * 100);
    this.plantgrowth = Math.floor(Math.random() * 100);
  }

}
