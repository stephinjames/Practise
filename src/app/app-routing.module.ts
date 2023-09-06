import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'product',component:ProductComponent},
  {path:'student',component:StudentComponent},
  {path:'reactiveform',component:ReactiveformComponent},
  {path:'admin',loadChildren:function(){ 
    return import('./admin/admin.module').then(res => res.AdminModule)
  }},
  {path:'ruser', loadChildren :()=> import('./ruser/ruser.module').then(m => m.RuserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
