import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { ViewDataComponent } from './components/view-data/view-data.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
