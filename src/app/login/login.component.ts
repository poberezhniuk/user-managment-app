import { Component, OnInit } from "@angular/core";

import { UserService } from "../user.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  hide: boolean = true; // Show or hide password
  show: boolean = true; // Switch btw inputs and spinner
  isLogged: boolean = false;
  showErrorMessage: boolean = false;
  color: string = "black";

  userList;
  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    // Subscribe on isLogged Subject
    this.userService.isLogged.subscribe(isLogged => (this.isLogged = isLogged));
    // Get user list
    this.userService.getUsers().subscribe(data => (this.userList = data));
    // Form builder validators
    this.loginForm = this.fb.group({
      email: [
        "galileogalilei@gmail.com",
        [Validators.required, Validators.email]
      ],
      password: [
        "Heliocentrism123#",
        [Validators.required, Validators.minLength(8)]
      ]
    });
  }

  get loginControls() {
    return this.loginForm.controls;
  }

  onLogin() {
    // If userlist empty abdon operation
    if (!this.userList.length) return;
    // search user with same email and pass
    // if pass redirect to "list" page

    if (this.checkEmailAndPassword()) {
      this.userService.changeIsLogged(true);
      this.router.navigate(["/user-list"]);
    }
  }

  checkEmailAndPassword() {
    const { email, password } = this.loginForm.value;

    return this.userList.some(
      user => user.email === email && user.password === password
    );
  }

  getErrorMessage(type) {
    if (this.loginControls[type].hasError("required")) return "Can't be empty";
    else if (this.loginControls[type].hasError("minlength"))
      return "To short..";
    else if (this.loginControls[type].hasError("email")) return "Invalid email";
    else return;
  }
}
