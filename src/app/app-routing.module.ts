import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductShowDetailComponent } from './product-show-detail/product-show-detail.component';
const routes: Routes = [{
  path:'signin',component:SigninComponent
},

 { path:'cart',component:CartComponent
},
{
  path:'',component:ProductListComponent

},
 {path:'productshowdetail',component:ProductShowDetailComponent
 }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
