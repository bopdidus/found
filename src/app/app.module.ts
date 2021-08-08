import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SharedModule} from './shared/shared/shared.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { ViewComponent } from './view/view.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { environment } from '../environments/environment';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavComponent,
    MainComponent,
    ViewComponent,
    AppointmentComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    SocialLoginModule,
    NgxWebstorageModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient],
      },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    AppointmentComponent
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'AIzaSyACSXQcwY2xhwPECyoytn9e2u52tCyJ_50'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('506449300425737')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
