import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-top-navigation",
  templateUrl: "./top-navigation.component.html",
  styleUrls: ["./top-navigation.component.scss"]
})
export class TopNavigationComponent implements OnInit {
  isLogged: boolean;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.isLogged.subscribe(isLogged => (this.isLogged = isLogged));
  }

  logOut() {
    this.userService.changeIsLogged(false);
  }
}
