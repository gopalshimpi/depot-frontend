import { CartComponent } from './../../cart/cart/cart.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // local_cart = []
  // service inject product
  // get_cart
  // cart_changed subscribe -> new assign to local_Cart

  constructor() { }

  ngOnInit() {
  }

}
