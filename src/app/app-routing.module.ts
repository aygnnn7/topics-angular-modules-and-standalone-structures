import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { DetailCustomerComponent } from './components/customers/detail-customer/detail-customer.component';
import { ListCustomerComponent } from './components/customers/list-customer/list-customer.component';
import { CustomPreloadingStrategy } from './strategies/custom-preloading-strategy';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "customers", loadChildren:
   () => import("../app/components/customers/customers.module").then(m=>m.CustomersModule),
    data: {preload:true}},
  {path: "products", loadChildren: 
   () => import("../app/components/products/products.module").then(m=>m.ProductsModule), 
   data: {preload: false}},
   {path: "standalone", loadComponent :
    () => import("./components/standalone/standalone.component").then(m => m.StandaloneComponent)},
     {path: "standalone2", loadComponent :
    () => import("./components/standalone2/standalone2.component").then(m => m.Standalone2Component)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:CustomPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
