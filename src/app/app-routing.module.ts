import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { LoginComponent } from "./login/login.component";
import { SingupComponent } from "./singup/singup.component";

const routes: Routes = [
  { path: "", redirectTo: "/user-list", pathMatch: "full" },
  { path: "user-list", component: UserListComponent },
  { path: "singup", component: SingupComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
