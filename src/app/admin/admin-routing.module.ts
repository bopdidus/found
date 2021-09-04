import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ItemComponent } from './item/item.component';
import { ListPostComponent } from './list-post/list-post.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children:[
    {path:'dashboard', component: DashboardComponent },
    {path:'category', component: CategoryComponent },
    {path:'post', component: ItemComponent },
    {path:'list-category', component: ListCategoryComponent },
    {path:'list-post', component: ListPostComponent },
    {path:'list-user', component: ListUserComponent },
  ] },
{path:'admin/login', component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
