import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    BannerComponent,
    RestaurantComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BannerComponent,
    RestaurantComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
