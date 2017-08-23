import { CartComponent } from './cart/cart.component';
import { cartRouting } from './cart.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    cartRouting
  ],
  exports:[
    CartComponent
  ],
  
  declarations: [ CartComponent]
})
export class CartModule { }
