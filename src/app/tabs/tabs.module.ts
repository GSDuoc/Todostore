import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { CompanyNameComponent } from '../company-name/company-name.component';
import { FooterComponent } from '../componentes/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    CompanyNameComponent,
    FooterComponent
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
