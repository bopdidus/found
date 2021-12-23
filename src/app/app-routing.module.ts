import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ViewComponent } from './view/view.component';
import { ProfileComponent } from './profile/profile.component';
import { UserGuard } from './guards/user.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent },
  
  {path:'App', component: DashboardComponent , children:[
    {path:'home', component: MainComponent },
    {path:'view/:id', component: ViewComponent, canActivate:[UserGuard] },
    {path:'profile', component: ProfileComponent, canActivate:[UserGuard] },
  ]},
 
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  /*{ path: '**', component: PageNotFoundComponent }*/
 
  { 
    path: '**',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
