import { FETCH_PRODUCT, FETCH_PRODUCT_SUCCESS } from './../actions/product-list.actions';
import { Observable } from 'rxjs/Observable';
import { ProductService } from './../home/product.service';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

@Injectable()
export class ProductListEffects {

    constructor(private actions$: Actions, private productService: ProductService) { }


    @Effect()
    getAllProducts$: Observable<Action> = this.actions$
        .ofType(FETCH_PRODUCT)
        .switchMap((action: Action) => this.productService.getData())
        .map((data: any) => { 
            console.log('This is from effect', data);
            return <Action>{ type: FETCH_PRODUCT_SUCCESS,payload: data } //sent to the reducer
        })

}