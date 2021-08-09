import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path : '' , component:MainComponent
  }, 
  {
    path : 'about' , component:AboutComponent
  }, 
  {
    path : 'product' , component:ProductComponent
  },
  {
    path : 'product_details/:id' , component:ProductDetailsComponent
  },
  {
    path : 'contact' , component:ContactComponent
  },
  {
    path : 'login' , component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
