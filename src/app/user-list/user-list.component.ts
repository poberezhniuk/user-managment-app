import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  isLogged: boolean;
  displayedColumns: string[] = ["id", "img", "name", "surname", "email"];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.isLogged.subscribe(isLogged => (this.isLogged = isLogged));
  }
}
