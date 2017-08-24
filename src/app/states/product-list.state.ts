import { ProductListState } from './product-list.state';
import { Product } from './../product';

export interface ProductListState{

     products: Product[];
}
export const initialState: ProductListState = {
		
		products: []
};

 

