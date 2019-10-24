import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { UserListComponent } from "./user-list/user-list.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { SingupComponent } from "./singup/singup.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  MatTableModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatIconModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { TopNavigationComponent } from "./top-navigation/top-navigation.component";
import { UserFieldsComponent } from "./user-fields/user-fields.component";
import { InMemoryDataService } from "./in-memory-data.service";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    HomeComponent,
    SingupComponent,
    TopNavigationComponent,
    UserFieldsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
