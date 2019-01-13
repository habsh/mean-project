import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = "http://localhost:3000/employees";

  constructor(public http: HttpClient) {

  }
  getMgr(id: number): Observable<any> {
    return this.http.get<any>(this.url + `/manager/${id}`, httpOptions)
      .pipe(
        catchError(err => this.handleError(err, id))
      );
  }

  handleError(arg0: string, data: any): any {
    throw new Error("Error fetching the Manager  data!!." + arg0);
  }
}
