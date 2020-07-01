import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getRequest(url: string,): Observable<any> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': "application/json"
      })
    };

    return this.http.get<any>(url, httpOptions);
  }

}
