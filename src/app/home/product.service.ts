import { CartComponent } from './../cart/cart/cart.component';
import { Observable } from 'rxjs/Observable';
import { Product } from './../product';
import { LineItem } from './../line_item';
import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';




@Injectable()
export class ProductService {

  private lineItems = new Map<number, LineItem>();
  private cart_id: any = null;
  private onAddtocart = new Subject<any>();

  baseUrl: string = "http://localhost:3000";

  productChanged = new EventEmitter<Product[]>();

  private products: Product[] = [];

  constructor(private http: Http) { }

  getProduct(id: number) {
    return this.products[id];
  }
  // getting product data from API
  
  getData():Observable<any> {
    return this.http.get(`${this.baseUrl}/products.json`)
      .map((response: Response) => response.json());
  }
  //getting cart from line item 
  addToCart(id: any, cart_id: any) {
    cart_id = this.getCart();
    const body = { "product_id": id, "cart_id": cart_id }
    return this.http.post(`${this.baseUrl}/line_items.json`, body, this.getHeaders())
      .map((response: Response) => {
        const addedItem = response.json() as LineItem
        this.lineItems.set(addedItem.product_id, addedItem);//hasmap
        
        //displying price.  
        const temp: any = addedItem.price * addedItem.quantity ;    
        return addedItem;
      });
  }

  updateCart() {
    this.onAddtocart.next(this.lineItems);
  }
  getCart() {
    if (localStorage.getItem('cart_id') == null) {
      return this.cart_id;
    }
    else {
      return (localStorage.getItem('cart_id'));
    }
  }
  //getting my observable data.
  getCartObservable(): Observable<any> {
    return this.onAddtocart.asObservable();
  }

  getHeaders() {
    const myHeaders = new Headers({ 'Content-Type': 'application/json' })
    return new RequestOptions({ headers: myHeaders });
  }

}
