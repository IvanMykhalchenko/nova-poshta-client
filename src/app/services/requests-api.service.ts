import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SelectItem } from 'primeng/api';
import { map } from 'rxjs/operators';

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
  }

  public getCities(ref: string): Observable<any> {
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
  }

  public getDepartments(ref: string): Observable<any> {
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
  }

  public saveRequest(props: object): Observable<any> {
    return this.http.post(
      environment.apiEndPoint,
      {
        "apiKey": environment.apiKey,
        "modelName": "InternetDocument",
        "calledMethod": "save",
        "methodProperties": props
      }
    )
  }

  public getPayersType(): Observable<SelectItem[]> {
    return this.http.post(
      environment.apiEndPoint,
      {
        "modelName": "Common",
        "calledMethod": "getTypesOfPayers",
        "methodProperties": {}
      }
    ).pipe(
      map((response:any) => response.data),
      map(data => data.map(payer => {
        return {
          label: payer.Description,
          value: payer.Ref
        }
      }))
    )
  }

  public getPaymentTypes(): Observable<SelectItem[]> {
    return this.http.post(
      environment.apiEndPoint,
      {
        "modelName": "Common",
        "calledMethod": "getPaymentForms",
        "apiKey": environment.apiKey,
        "methodProperties": {}
      }
    ).pipe(
      map((response:any) => response.data),
      map(data => data.map(payment => {
        return {
          label: payment.Description,
          value: payment.Ref
        }
      }))
    )
  }

  public getCargoTypes(): Observable<SelectItem[]> {
    return this.http.post(
      environment.apiEndPoint,
      {
        "modelName": "Common",
        "calledMethod": "getCargoTypes",
        "apiKey": environment.apiKey,
        "methodProperties": {}
      }
    ).pipe(
      map((response:any) => response.data),
      map(data => data.map(payment => {
        return {
          label: payment.Description,
          value: payment.Ref
        }
      }))
    )
  }

  public getServiceTypes(): Observable<SelectItem[]> {
    return this.http.post(
      environment.apiEndPoint,
      {
        "modelName": "Common",
        "calledMethod": "getServiceTypes",
        "apiKey": environment.apiKey,
        "methodProperties": {}
      }
    ).pipe(
      map((response:any) => response.data),
      map(data => data.map(payment => {
        return {
          label: payment.Description,
          value: payment.Ref
        }
      }))
    )
  }
}
