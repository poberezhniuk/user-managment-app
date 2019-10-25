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
        name: "Albert ",
        surname: "Einstein",
        email: "alberteeinstein@gmail.com",
        password: "equivalence"
      },
      {
        id: 1,
        name: "Isaac",
        surname: "Newton",
        email: "isaacnewton@gmail.com",
        password: "gravitation"
      },
      {
        id: 2,
        name: "Galileo",
        surname: "Galilei",
        email: "galileogalilei@gmail.com",
        password: "heliocentrism"
      },
      {
        id: 0,
        name: "Albert ",
        surname: "Einstein",
        email: "alberteeinstein@gmail.com",
        password: "equivalence"
      },
      {
        id: 1,
        name: "Isaac",
        surname: "Newton",
        email: "isaacnewton@gmail.com",
        password: "gravitation"
      },
      {
        id: 2,
        name: "Galileo",
        surname: "Galilei",
        email: "galileogalilei@gmail.com",
        password: "heliocentrism"
      },
      {
        id: 0,
        name: "Albert ",
        surname: "Einstein",
        email: "alberteeinstein@gmail.com",
        password: "equivalence"
      },
      {
        id: 1,
        name: "Isaac",
        surname: "Newton",
        email: "isaacnewton@gmail.com",
        password: "gravitation"
      },
      {
        id: 2,
        name: "Galileo",
        surname: "Galilei",
        email: "galileogalilei@gmail.com",
        password: "heliocentrism"
      },
      {
        id: 0,
        name: "Albert ",
        surname: "Einstein",
        email: "alberteeinstein@gmail.com",
        password: "equivalence"
      },
      {
        id: 1,
        name: "Isaac",
        surname: "Newton",
        email: "isaacnewton@gmail.com",
        password: "gravitation"
      },
      {
        id: 2,
        name: "Galileo",
        surname: "Galilei",
        email: "galileogalilei@gmail.com",
        password: "heliocentrism"
      },
      {
        id: 0,
        name: "Albert ",
        surname: "Einstein",
        email: "alberteeinstein@gmail.com",
        password: "equivalence"
      },
      {
        id: 1,
        name: "Isaac",
        surname: "Newton",
        email: "isaacnewton@gmail.com",
        password: "gravitation"
      },
      {
        id: 2,
        name: "Galileo",
        surname: "Galilei",
        email: "galileogalilei@gmail.com",
        password: "heliocentrism"
      }
    ];

    return { users };
  }

  // genId(users: User[]): number {
  //   return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 0;
  // }
}
