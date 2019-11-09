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
  MatPaginatorModule,
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
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { MessageNotAutorizedComponent } from "./message-not-autorized/message-not-autorized.component";
import { TableComponent } from "./user-list/table/table.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { DeleteUserDialogComponent } from "./delete-user-dialog/delete-user-dialog.component";
import { UpdateUserDialogComponent } from "./update-user-dialog/update-user-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    SingupComponent,
    TopNavigationComponent,
    UserFieldsComponent,
    UserProfileComponent,
    MessageNotAutorizedComponent,
    TableComponent,
    AddUserComponent,
    DeleteUserDialogComponent,
    UpdateUserDialogComponent
  ],

  imports: [
    MatDialogModule,
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
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddUserComponent,
    DeleteUserDialogComponent,
    UpdateUserDialogComponent
  ]
})
export class AppModule {}
