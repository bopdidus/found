import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {  HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[TranslateModule,  HttpClientModule]
})
export class SharedModule { 
}
