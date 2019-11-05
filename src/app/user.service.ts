import { Injectable } from "@angular/core";
import { User } from "./user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class UserService {
  private apiUrl = "api/users";
  private isLoggedSource = new BehaviorSubject(false);
  isLogged = this.isLoggedSource.asObservable();

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    return throwError(error);
  }

  changeIsLogged(value: boolean) {
    this.isLoggedSource.next(value);
  }

  addUser(user: User): Observable<User> {
    return this.http
      .post<User>(this.apiUrl, user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }
}
