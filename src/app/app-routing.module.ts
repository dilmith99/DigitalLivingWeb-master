import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SolutionPageComponent } from './components/solution-page/solution-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ResearchComponent } from './components/research/research.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomePageComponent},
  {path: 'solutions', component:SolutionPageComponent},
  {path: 'aboutUs', component:AboutUsComponent},
  {path: 'research', component:ResearchComponent},
  {path: 'contactUs', component:ContactUsComponent},
  {path: 'Products', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }