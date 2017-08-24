import { Product } from './../product';
import { FETCH_PRODUCT,FETCH_PRODUCT_SUCCESS } from './../actions/product-list.actions';
import { ProductListState, initialState } from './../states/product-list.state';
import { ActionReducer, Action } from '@ngrx/store';

export  const productListReducer: ActionReducer<ProductListState> = 
(state = initialState, action: Action) =>{

    console.log('Action working',action.type);

    switch(action.type){

    
        case FETCH_PRODUCT_SUCCESS:{
            
            return{
                    products: action.payload as Product[]
            }
        }
        default:{
             return state;
        }

    }


};