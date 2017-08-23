
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
    HomeModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
