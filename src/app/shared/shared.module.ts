import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {  HttpClientModule, HttpClient } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import{ FlexLayoutModule} from '@angular/flex-layout';
import{ RouterModule} from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoaderComponent,
    SnackbarComponent,
   ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    HttpClientModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
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
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  exports:[TranslateModule,  HttpClientModule,HeaderComponent,
    FooterComponent,
    SidebarComponent, LoaderComponent]
})
export class SharedModule { 
}
