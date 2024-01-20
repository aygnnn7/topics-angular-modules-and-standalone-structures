import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { HomeComponent } from './components/home/home.component';
import { CustomPreloadingStrategy } from './strategies/custom-preloading-strategy';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule
  ],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
