import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { OwnerComponent } from './components/owner/owner.component';
import { ShopComponent } from './components/shop/shop.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { BasketComponent } from './components/basket/basket.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { AboutComponent } from './components/footer/about/about.component';
import { CooperationComponent } from './components/footer/cooperation/cooperation.component';
import { HelpComponent } from './components/footer/help/help.component';
import { RefundsComponent } from './components/footer/refunds/refunds.component';
import { ResendComponent } from './components/footer/resend/resend.component';
import { ShippingComponent } from './components/footer/shipping/shipping.component';
import { HelpcenterComponent } from './components/footer/helpcenter/helpcenter.component';
import { DocumentsComponent } from './components/footer/documents/documents.component';
import { AccountComponent } from './components/footer/account/account.component';
import { OrdersComponent } from './components/footer/orders/orders.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    OwnerComponent,
    ShopComponent,
    LoginComponent,
    UserComponent,
    BasketComponent,
    PaymentsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    WishlistComponent,
    BlogComponent,
    PostComponent,
    AboutComponent,
    CooperationComponent,
    HelpComponent,
    RefundsComponent,
    ResendComponent,
    ShippingComponent,
    HelpcenterComponent,
    DocumentsComponent,
    AccountComponent,
    OrdersComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
