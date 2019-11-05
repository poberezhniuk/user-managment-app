import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { UserListComponent } from "./user-list/user-list.component";
import { LoginComponent } from "./login/login.component";
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
  MatIconModule,
  MatPaginatorModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { TopNavigationComponent } from "./top-navigation/top-navigation.component";
import { UserFieldsComponent } from "./user-fields/user-fields.component";
import { InMemoryDataService } from "./in-memory-data.service";
import { EditDialogComponent } from "./edit-dialog/edit-dialog.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { MessageNotAutorizedComponent } from './message-not-autorized/message-not-autorized.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    SingupComponent,
    TopNavigationComponent,
    UserFieldsComponent,
    EditDialogComponent,
    UserProfileComponent,
    MessageNotAutorizedComponent
  ],

  imports: [
    MatPaginatorModule,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
