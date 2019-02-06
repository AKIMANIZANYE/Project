import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import {HttpClientModule} from '@angular/common/http'
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { FormComponent } from './form/form.component';
import {AlertsService} from './alert-service/alerts.service'

import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
   
    StrikethroughDirective,
    DateCountPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
