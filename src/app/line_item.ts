import { Product } from './product';

export interface LineItem {
	cart_id: number,
	created_at: string,
	id: number,
	product_id: number,
	updated_at: string,
	url: string,
	title: string,
	price: number,
	quantity: number,
	product: Product,
	total: number,
	gtotal: number 
};
