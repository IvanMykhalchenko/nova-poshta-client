import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SelectItem } from 'primeng/api'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getAreas(): Observable<any> {
    return this.http.post(
      environment.apiEndPoint,
      {
        "apiKey": environment.apiKey,
        "modelName": "Address",
        "calledMethod": "getAreas",
        "methodProperties": {}
      }
    )
    .pipe(
    )
  }
}
