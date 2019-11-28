import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "src/app/user.service";
import {
  MatTableDataSource,
  MatSort,
  MatPaginator,
  MatDialog,
  MatDialogConfig
} from "@angular/material";
import { AddUserComponent } from "src/app/add-user/add-user.component";
import { DeleteUserDialogComponent } from "src/app/delete-user-dialog/delete-user-dialog.component";
import { UpdateUserDialogComponent } from "src/app/update-user-dialog/update-user-dialog.component";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    "id",
    "img",
    "name",
    "surname",
    "email",
    "password",
    "controls"
  ];
  pageSizesArray = [1, 5, 10, 20, 50, 100];
  constructor(private userService: UserService, public dialog: MatDialog) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(response => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openAddDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.getUsers();
      }
    });
  }

  openUpdateDialog(id: number, data) {
    const dialogConfig = new MatDialogConfig();
    const user = data.find(user => user.id === id);
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      user: user
    };

    const dialogRef = this.dialog.open(UpdateUserDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.getUsers();
      }
    });
  }

  openDeleteDialog(id: number, data) {
    const dialogConfig = new MatDialogConfig();
    const { name, surname } = data.find(user => user.id === id);

    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: id,
      description: `Delete "${name} ${surname}"?`
    };

    const dialogRef = this.dialog.open(DeleteUserDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.getUsers();
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
