import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, } from 'rxjs/operators';
import { Userlist } from '../model/userlist.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'https://api.github.com/';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Userlist[]> {
    return this.http.get<Userlist[]>(apiUrl + 'orgs/angular/public_members')
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  public getRepo(login): Observable<Userlist[]> {
    return this.http.get<Userlist[]>(apiUrl + 'users/'+ login + '/repos')
      .pipe(
        catchError(this.handleError('getRepo', []))
      );
  }

  public getFollowers(login): Observable<Userlist[]> {
    return this.http.get<Userlist[]>(apiUrl + 'users/'+ login + '/followers')
      .pipe(
        catchError(this.handleError('getFollowers', []))
      );
  }

  public getDate(login): Observable<Userlist[]> {
    return this.http.get<Userlist[]>(apiUrl + 'users/' + login)
      .pipe(
        catchError(this.handleError('getDate', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}