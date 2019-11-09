import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../user";

@Component({
  selector: "app-user-fields",
  templateUrl: "./user-fields.component.html",
  styleUrls: ["./user-fields.component.scss"]
})
export class UserFieldsComponent implements OnInit {
  @Input() userInput: User;

  defaultProfileImg: any = "assets/imgs/default-user-icon.jpg"; // url to default profile img
  hide: boolean = true;
  userForm: FormGroup;
  user: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
    profileImg: this.defaultProfileImg
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      id: null,
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
          )
        ]
      ],
      profileImg: this.defaultProfileImg
    });

    if (this.userInput) {
      this.userForm.patchValue(this.userInput);
    }
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

  setProfileImg(event: any) {
    const reader = new FileReader();
    const img = event.target.files[0];

    this.user.profileImg = img;
    reader.readAsDataURL(img);

    reader.onload = () => {
      this.defaultProfileImg = reader.result;
      this.userForm.patchValue({ profileImg: reader.result });
    };
  }
}
