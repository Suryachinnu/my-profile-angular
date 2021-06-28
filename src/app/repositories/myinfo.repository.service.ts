import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {Hobby, Interest, User} from '../_models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  SERVER_URL = 'api';
  constructor(private http: HttpClient) { }

  public getUserDetails(): Observable<User>{
    return this.http.get<User>(this.SERVER_URL + '/user')
    .pipe(
      tap(_ => console.log('fetched User Details'))
    );
  }
  public getUserHobbies(): Observable<Hobby[]>{
    return this.http.get<Hobby[]>(this.SERVER_URL + '/hobbies')
    .pipe(
      tap(_ => console.log('fetched Hobbies'))
    );
  }
  public getUserInterests(): Observable<Interest[]>{
    return this.http.get<Interest[]>(this.SERVER_URL + '/interests')
    .pipe(
      tap(_ => console.log('fetched Interest'))
    );
  }
}
