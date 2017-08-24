import { FETCH_PRODUCT ,FETCH_PRODUCT_SUCCESS} from './../../actions/product-list.actions';
import { ProductListState } from './../../states/product-list.state';
import { Product } from './../../product';
import { LineItem } from './../../line_item';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 
  products: Product[] = [];

  lineItems: LineItem[]=[];

  //productlist$ : Observable<Product[]>;

  constructor(private productService: ProductService,
              private store: Store<ProductListState>) { 
      this.store.select('products').pluck('products').subscribe((res: Product[])=>{
        console.log("From Components Product List",res);
        this.products = res;  
    })                
  }

  ngOnInit() {
    this.store.dispatch({type: FETCH_PRODUCT})
    // this.productlist$ = this.productService.getData();
    // this.productlist$.subscribe((res: Product[])=>{
    //   this.products= res;  
    //}) 
  }

  //button method
  addToCart(id){
    const localCart: any =localStorage.getItem('cart_id');
    this.productService.addToCart(id,localCart).subscribe(( lineItem: LineItem ) => {
    localStorage.setItem('cart_id',''+lineItem.cart_id);
    this.productService.updateCart();   
    lineItem.gtotal = (lineItem.quantity * lineItem.product.price);
  
    });
  }

  
}
