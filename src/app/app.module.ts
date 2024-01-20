import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { HomeComponent } from './components/home/home.component';
import { CustomPreloadingStrategy } from './strategies/custom-preloading-strategy';
import { StandaloneComponent } from './components/standalone/standalone.component';
import { Standalone2Component } from './components/standalone2/standalone2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule,
    StandaloneComponent
  ],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
