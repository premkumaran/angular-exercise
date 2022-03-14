import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { OrderProductsComponent } from './order-products/order-products.component';

const routes: Routes = [
  { path: "addproducts", component: AddProductsComponent },
  { path: "listproducts", component: ListProductsComponent },
  { path: "orderproducts", component: OrderProductsComponent },
  { path: "", redirectTo: "/addproducts", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
