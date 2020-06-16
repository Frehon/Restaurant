import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {MenuDetailsComponent} from './menu-details/menu-details.component';
import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuDetailsComponent,
    RestaurantInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
