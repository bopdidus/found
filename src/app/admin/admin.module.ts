import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [AdminComponent, LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    AdminRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient],
      },
    }),

  ]
})
export class AdminModule { }
