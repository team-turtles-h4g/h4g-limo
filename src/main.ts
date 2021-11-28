import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from "@esri/calcite-components/dist/loader";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

defineCustomElements(window, {
  resourcesUrl: "https://js.arcgis.com/calcite-components/1.0.0-beta.69/assets"
});
