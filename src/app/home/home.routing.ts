import { ModuleWithProviders } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeModule } from './home.module';
import { Routes, RouterModule } from '@angular/router';

const homeRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ProductListComponent }];
  
export const homeRouting: ModuleWithProviders=RouterModule.forChild(homeRoutes);