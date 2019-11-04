import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { UserService } from "../user.service";

@Component({
  selector: "app-singup",
  templateUrl: "./singup.component.html",
  styleUrls: ["./singup.component.scss"]
})
export class SingupComponent {
  constructor(private fb: FormBuilder, private userService: UserService) {}

  addUser(user): void {
    this.userService.addUser(user);
  }
}
