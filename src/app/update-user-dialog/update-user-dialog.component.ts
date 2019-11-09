import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { UserService } from "../user.service";
import { User } from "../user";

@Component({
  selector: "app-update-user-dialog",
  templateUrl: "./update-user-dialog.component.html",
  styleUrls: ["./update-user-dialog.component.scss"]
})
export class UpdateUserDialogComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.user = { ...data.user };
  }

  ngOnInit() {}

  confirm(user: User) {
    if (false) {
      return;
    } else {
      this.userService.updateUser(user).subscribe();
    }
  }

  cancel() {}
}
