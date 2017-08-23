import { CartComponent } from './../cart/cart/cart.component';
import { CartModule } from './../cart/cart.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/header/header.component';



@NgModule({
  imports: [
    CommonModule,CartModule
  ],
  exports: [
   HeaderComponent,SidebarComponent,CartComponent
  ],
  declarations: [HeaderComponent, SidebarComponent]
})
export class LayoutModule { }
