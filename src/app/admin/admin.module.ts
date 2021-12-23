import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ItemComponent } from './item/item.component';
import { ListPostComponent } from './list-post/list-post.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserService } from '../services/user.service';
import { ItemService } from '../services/item.service';
import { AuthService } from '../services/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoaderInterceptor } from '../interceptors/loader.interceptor';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [AdminComponent, LoginComponent, DashboardComponent, CategoryComponent, ListCategoryComponent, ItemComponent, ListPostComponent, ListUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    AdminRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatDividerModule,
    MatSnackBarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCheckboxModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient],
      },
    }),

  ],
  providers: [
    TranslateService,
    UserService,
    ItemService,
    AuthService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    {provide: MatDialogRef, useValue: {hasBackdrop: true}},
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ]
})
export class AdminModule { }
