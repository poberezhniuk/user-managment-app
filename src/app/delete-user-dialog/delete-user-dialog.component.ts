import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { UserService } from "../user.service";

@Component({
  selector: "app-delete-user-dialog",
  templateUrl: "./delete-user-dialog.component.html",
  styleUrls: ["./delete-user-dialog.component.scss"]
})
export class DeleteUserDialogComponent implements OnInit {
  description: string;
  id: number;

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<DeleteUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    const { id, description } = data;

    this.description = description;
    this.id = id;
  }

  ngOnInit() {}

  delete(id: number) {
    this.userService.deleteUser(id).subscribe(() => this.dialogRef.close());
  }

  cancel() {
    this.dialogRef.close();
  }
}
