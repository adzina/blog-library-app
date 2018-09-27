import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  public API_URL = '//localhost:3000/';
  public USER_API_URL = this.API_URL + 'users';

  constructor(private http: HttpClient) {
  }

  save(user: any): Observable<any> {
    user['registered'] = false;
    return this.http.post(this.USER_API_URL, user);
  }
  login(user: any): Observable<any> {
    return this.http.get(this.USER_API_URL + '?email=' + user.email);
  }

}
