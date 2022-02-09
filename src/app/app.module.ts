import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LetrehozasPopupComponent } from './targyak-create/letrehozas-popup.component';
import { TargyakService } from './targyak.service';
import { TorlesPopupComponentComponent } from './targyak-delete/torles-popup-component.component';
import { TargyakComponent } from './targyak/targyak.component';
import { SzerkesztesPopupComponent } from './targyak-edit/szerkesztes-popup.component';
import { RaktarakComponent } from './raktarak/raktarak.component';
import { HeaderComponent } from './header/header.component';
import { RaktarakService } from './raktarak.service';
import { RaktarakCreateComponent } from './raktarak-create/raktarak-create.component';
import { RaktarakDeleteComponent } from './raktarak-delete/raktarak-delete.component';
import { RaktarakEditComponent } from './raktarak-edit/raktarak-edit.component';

import { LoginComponent } from './login/login.component';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LetrehozasPopupComponent,
    TorlesPopupComponentComponent,
    TargyakComponent,
    SzerkesztesPopupComponent,
    RaktarakComponent,
    HeaderComponent,
    RaktarakCreateComponent,
    RaktarakDeleteComponent,
    RaktarakEditComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TargyakService,RaktarakService],
  bootstrap: [AppComponent]
})
export class AppModule { }
