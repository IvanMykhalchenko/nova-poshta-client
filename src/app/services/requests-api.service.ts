import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SelectItem } from 'primeng/api'
import { environment } from '../../environments/environment';
import { map, take, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestsApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getAreas(): Observable<SelectItem> {
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
      map((response: any) => {
        return response.data.map(area => {
          return {
            label: area.Description,
            value: area.Ref
          }
        })
      }),
    ) 
  }

  public getCities(ref: string): Observable<SelectItem> {
    return this.http.post(
      environment.apiEndPoint,
      {
        "apiKey": environment.apiKey,
        "modelName": "Address",
        "calledMethod": "getCities",
        "methodProperties": {
          'AreaRef': ref
        }
      }
    )
    .pipe(
      delay(5000),
      map((response: any) => {
        return response.data.map(city => {
          return {
            label: city.Description,
            value: city.Ref
          }
        })
      }),
    ) 
  }

  public getDepartments(ref: string): Observable<SelectItem> {
    return this.http.post(
      environment.apiEndPoint,
      {
        "apiKey": environment.apiKey,
        "modelName": "AddressGeneral",
        "calledMethod": "getWarehouses",
        "methodProperties": {
          'CityRef': ref
        }
      }
    )
    .pipe(
      map((response: any) => {
        return response.data.map(department => {
          return {
            label: department.Description,
            value: department.Ref
          }
        })
      }),
    ) 
  }
}
