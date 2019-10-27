import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserListComponent } from "./user-list/user-list.component";
import { LoginComponent } from "./login/login.component";
import { SingupComponent } from "./singup/singup.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "user-list", component: UserListComponent },
  { path: "user/:id", component: UserProfileComponent },
  { path: "singup", component: SingupComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
