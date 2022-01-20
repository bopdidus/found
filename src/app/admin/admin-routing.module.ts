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
import { AdminGuard } from '../guards/admin.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children:[
    {path:'dashboard', component: DashboardComponent},
    {path:'category', component: CategoryComponent },
    {path:'post', component: ItemComponent },
    {path:'list-category', component: ListCategoryComponent },
    {path:'list-post', component: ListPostComponent },
    {path:'list-user', component: ListUserComponent },
    {path:'user/create', component: UserComponent },
  ], canActivate:[AdminGuard] },
{path:'admin/login', component: LoginComponent },
{ path: '**',
    redirectTo: '/admin/login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
