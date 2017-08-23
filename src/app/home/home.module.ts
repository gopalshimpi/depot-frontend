import { LayoutModule } from './../layout/layout.module';
import { ProductService } from './product.service';
import { Http,HttpModule } from '@angular/http';
import { homeRouting } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../home/product-list/product-list.component';


@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    HttpModule,
    LayoutModule
  ],

  declarations: [ProductListComponent]
})
export class HomeModule { }
