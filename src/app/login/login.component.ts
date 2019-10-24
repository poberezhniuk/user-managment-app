import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  hide = true; // Show or hide password
  show = true; // Switch btw inputs and spinner
  color = "black";
  isLogged = false;
  userList;
  loginForm: FormGroup;
  email: string = ""; // input email
  password: string = ""; // input password
  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    // Get user list
    this.userService.getUsers().subscribe(data => (this.userList = data));
    // Form builder validators
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  get loginControls() {
    return this.loginForm.controls;
  }

  onLogin() {
    // If userlist empty abdon operation
    if (!this.userList.length) return;
    // search user with same email and pass
    if (this.checkEmailAndPassword()) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  checkEmailAndPassword() {
    const { loginFormEmail, loginFormPassword } = this.loginForm.value;

    return this.userList.some(user => {
      user.email === loginFormEmail;
      user.password === loginFormPassword;
    });
  }

  getErrorMessage(type) {
    if (this.loginControls[type].hasError("required")) return "Can't be empty";
    else if (this.loginControls[type].hasError("minlength"))
      return "To short..";
    else if (this.loginControls[type].hasError("email")) return "Invalid email";
    else return;
  }
}
