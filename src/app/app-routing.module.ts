import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestaurantInfoComponent} from './restaurant-info/restaurant-info.component';
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'info', component: RestaurantInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
