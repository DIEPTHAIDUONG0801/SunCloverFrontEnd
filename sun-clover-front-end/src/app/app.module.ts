import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdminComponent} from "./components/admin/admin.component";
import {LoginComponent} from "./pages/login/login.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./pages/home/home.component";
import {PopupComponent} from "./components/popup/popup.component";
import {MatDialogModule} from "@angular/material/dialog";
import {PopupService} from "./services/popup.service";
import {MatInputModule} from "@angular/material/input";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [
    PopupService,
    AuthService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule { }
