import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"]
})
export class AddUserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<AddUserComponent>
  ) {}

  ngOnInit() {}

  addUser(user: User): void {
    if (user) {
      this.userService.addUser(user).subscribe(() => this.dialogRef.close());
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
