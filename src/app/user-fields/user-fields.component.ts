import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: "app-user-fields",
  templateUrl: "./user-fields.component.html",
  styleUrls: ["./user-fields.component.scss"]
})
export class UserFieldsComponent implements OnInit {
  hide = true;
  userForm: FormGroup;
  user: User = {
    id: 1,
    name: "",
    surname: "",
    email: "",
    password: ""
  };

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [this.user.name, Validators.required],
      surname: [this.user.surname, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [
        this.user.password,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
          )
        ]
      ]
    });
    console.log(this.userForm);
  }

  get userControls() {
    return this.userForm.controls;
  }

  getErrorMessage(type) {
    if (this.userControls[type].hasError("required")) return "Can't be empty";
    else if (this.userControls[type].hasError("minlength"))
      return "To short...";
    else if (this.userControls[type].hasError("email")) return "Invalid email";
    else if (this.userControls[type].hasError("pattern"))
      return "Only letters and numbers";
    else return;
  }

  addUser() {
    if (this.userForm.invalid) {
      return;
    } else {
      this.userService.addUser(this.user);
    }
  }
}
