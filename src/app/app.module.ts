import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SolutionPageComponent } from './components/solution-page/solution-page.component';
import { FooterOnlyLayoutComponent } from './components/footer-only-layout/footer-only-layout.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ResearchComponent } from './components/research/research.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    HomePageComponent,
    SolutionPageComponent,
    FooterOnlyLayoutComponent,
    AboutUsComponent,
    ResearchComponent,
    ProductsComponent,
    ContactUsComponent,
    ProductsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2PageScrollModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
