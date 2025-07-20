import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CompanyNameComponent } from '../company-name/company-name.component';

import { BannerComponent } from '../componentes/banner/banner.component';
import { FooterComponent } from '../componentes/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule, 
    CompanyNameComponent,
    BannerComponent,
    FooterComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
