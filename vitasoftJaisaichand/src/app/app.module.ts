import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenoneComponent } from './screenone/screenone.component';
import { HeaderComponent } from './header/header.component';
import { ScreentwoComponent } from './screentwo/screentwo.component';
import { ScreenthreeComponent } from './screenthree/screenthree.component';
import { TermsComponent } from './terms/terms.component';
import { ScreenfiveComponent } from './screenfive/screenfive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { CreatecontainerComponent } from './createcontainer/createcontainer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AccountpageComponent } from './accountpage/accountpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenoneComponent,
    HeaderComponent,
    ScreentwoComponent,
    ScreenthreeComponent,
    TermsComponent,
    ScreenfiveComponent,
    CreatecontainerComponent,
    AccountpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
