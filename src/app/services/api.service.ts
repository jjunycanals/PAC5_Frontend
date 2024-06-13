import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllPeople(): Observable<any> {
    return this.http.get('https://swapi.dev/api/people');
  }

  getPeopleById(id: String): Observable<any> {
    return this.http.get('https://swapi.dev/api/people/' + id);

  }
}
