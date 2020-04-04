import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) : Observable<any> {
    const url = `${environment.personBaseUrl}/v1/login`;

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'username': username,
        'password': password
      })
    };
    return this.http.get<Person>(url, httpOptions);
  }
}
