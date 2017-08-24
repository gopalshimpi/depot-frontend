import { ProductListEffects } from './effects/product-list.effects';
import { EffectsModule } from '@ngrx/effects';
import { Appstate } from './app.state';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { Http ,HttpModule} from '@angular/http';
import { ProductService } from './home/product.service';
import { CartModule } from './cart/cart.module';
import { appRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from "@ngrx/store";
import { productListReducer } from "./reducers/product-list.reducers";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    RouterModule,
    SharedModule,
    CartModule,
    HttpModule,
    LayoutModule,
    HomeModule,
    StoreModule.provideStore({products: productListReducer}),
    EffectsModule.run(ProductListEffects)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
