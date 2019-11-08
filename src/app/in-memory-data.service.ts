import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        id: 0,
        name: "Albert",
        surname: "Einstein",
        email: "alberteeinstein@gmail.com",
        password: "Equivalence123#",
        profileImg: "/user-managment-app/assets/imgs/einstein.jpg"
      },
      {
        id: 1,
        name: "Isaac",
        surname: "Newton",
        email: "isaacnewton@gmail.com",
        password: "Gravitation13#",
        profileImg: "/user-managment-app/assets/imgs/isaac-newton.jpg"
      },
      {
        id: 2,
        name: "Galileo",
        surname: "Galilei",
        email: "galileogalilei@gmail.com",
        password: "Heliocentrism123#",
        profileImg: "/user-managment-app/assets/imgs/galileo-galilei.jpg"
      }
    ];

    return { users };
  }
}
