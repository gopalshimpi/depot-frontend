import { CartModule } from './cart.module';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const cartRoutes: Routes=[
    { path: '', redirectTo: 'cart', pathMatch: 'full'},
    
    
];
export const cartRouting: ModuleWithProviders=RouterModule.forChild(cartRoutes);

  