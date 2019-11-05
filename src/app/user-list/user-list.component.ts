
import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../user.service";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {

  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ["id", "name", "surname", "email"];

  constructor(private userService: UserService) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.dataSource.data = data;
    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
