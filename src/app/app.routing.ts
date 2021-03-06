import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

 const routes: Routes = [
    { path: '', loadChildren: './home/home.module.ts#HomeModule', pathMatch: 'full' },
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);

