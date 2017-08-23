import { Product } from './../../product';
import { LineItem } from './../../line_item';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

   g: number=0;
  lineItems: LineItem[]=[];

  productlist$ : Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productlist$ = this.productService.getData();
    this.productlist$.subscribe((res: Product[])=>{
      this.products= res;  
    }) 
  }
  //button method
  addToCart(id){
    const localCart: any =localStorage.getItem('cart_id');
    console.log("Product List",localCart);
    this.productService.addToCart(id,localCart).subscribe(( lineItem: LineItem ) => {
    localStorage.setItem('cart_id',''+lineItem.cart_id);
    this.productService.updateCart();   
    lineItem.gtotal = (lineItem.quantity * lineItem.product.price);
  
    });
  }

  
}
