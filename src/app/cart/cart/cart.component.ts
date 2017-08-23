import { Product } from './../../product';
import { ProductService } from './../../home/product.service';
import { LineItem } from './../../line_item';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  private lineItems;

  products: Product[] = [];
  cartSubscription: Subscription;
  constructor(private productService: ProductService) { }
  
  ngOnInit() {
     this.cartSubscription=this.productService.getCartObservable()
    .subscribe((lineItems:Map<number,LineItem> )=> { this.lineItems = lineItems.values()
    console.log("From Cart",(lineItems.values()));

        
        });

  }
 

}
