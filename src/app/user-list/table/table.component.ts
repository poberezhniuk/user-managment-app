import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "src/app/user.service";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ["id", "img", "name", "surname", "email"];
  pageSizesArray = [1, 5, 10, 20, 50, 100];
  constructor(private userService: UserService) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.userService.getUsers().subscribe(response => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
