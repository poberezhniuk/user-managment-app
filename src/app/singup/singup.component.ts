import { Component } from "@angular/core";

import { UserService } from "../user.service";
import { User } from "../user";
import { Router } from "@angular/router";

@Component({
  selector: "app-singup",
  templateUrl: "./singup.component.html",
  styleUrls: ["./singup.component.scss"]
})

export class SingupComponent {
  constructor(private userService: UserService, private router: Router) {}

  addUser(user: User): void {
    if (user) {
      this.userService
        .addUser(user)
        .subscribe(() => this.router.navigate(["/login"]));
    }
  }
}
