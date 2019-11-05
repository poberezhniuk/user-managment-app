import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../user";

@Component({
  selector: "app-user-fields",
  templateUrl: "./user-fields.component.html",
  styleUrls: ["./user-fields.component.scss"]
})
export class UserFieldsComponent implements OnInit {
  profileImgURL: any = "assets/imgs/default-user-icon.jpg"; // url to default profile img
  hide: boolean = true;
  userForm: FormGroup;
  user: User = {
    name: "Ivan",
    surname: "Poberezhniuk",
    email: "email@emeil.com",
    password: "ASfkjaslodfj$#2Ad",
    profileImg: this.profileImgURL
  };

  constructor(private fb: FormBuilder) {}

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
      this.profileImgURL = reader.result;
      this.user.profileImg = reader.result;
    };
  }

  getBase64Image(img) {
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    let dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
}
