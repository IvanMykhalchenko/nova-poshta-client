import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SelectItem } from 'primeng/api';
import { RequestsApiService } from '../../services/requests-api.service';
import * as moment from 'moment';
import { FormService } from '../../services/form.service';

type UserType = 'sender' | 'recipient';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public areasSender: SelectItem[];
  public areasRecipient: SelectItem[];
  public citiesSender: SelectItem[];
  public citiesRecipient: SelectItem[];
  public departmentsSender: SelectItem[];
  public departmentsRecipient: SelectItem[];
  public payersTypes: Observable<SelectItem[]> = this.api.getPayersType();
  public paymentType: Observable<SelectItem[]> = this.api.getPaymentTypes();
  public cargoTypes: Observable<SelectItem[]> = this.api.getCargoTypes();
  public serviceTypes: Observable<SelectItem[]> = this.api.getServiceTypes();
  public dateTime: string;
  public isDisableSenderDropdownCity: boolean = true;
  public isDisableSenderDropdownDepartment: boolean = true;
  public isDisableRecipientDropdownCity: boolean = true;
  public isDisableRecipientDropdownDepartment: boolean = true;


  constructor(
    private formService: FormService,
    private api: RequestsApiService
  ) { }

  ngOnInit(): void {
    this.getAreas();
    this.form = this.formService.createForm();
  }

  public getAreas() {
    this.api.getAreas().subscribe(
      (response: any) => {
        this.areasSender = response.data.map(area => ({
          label: area.Description,
          value: area.Ref
        }))
        this.areasSender = this.areasSender.slice(1);
        this.areasRecipient = [...this.areasSender];
      }
    )
  }

  public getCities(ref: string, type?: UserType) {
    this.api.getCities(ref).subscribe(
      (response: any) => {
        const arr = response.data.map(city => ({
          label: city.Description,
          value: city.Ref
        }))
        type == 'sender' ? this.citiesSender = arr : this.citiesRecipient = arr;
        type == 'sender' ? this.isDisableSenderDropdownCity = false : this.isDisableRecipientDropdownCity = false;
      }
    )
  }
  
  public getDepartments(ref: string, type?: UserType) {
    this.api.getDepartments(ref).subscribe(
      (response: any) => {
        const arr = response.data.map(department => ({
          label: department.Description,
          value: department.Ref
        }));
        type == 'sender' ? this.departmentsSender = arr : this.departmentsRecipient = arr;
        type == 'sender' ? this.isDisableSenderDropdownDepartment = false : this.isDisableRecipientDropdownDepartment = false;
      }
    )
  }

  public onSubmit() {
    this.api.saveRequest({
      ...this.form.value,
      'DateTime': moment(this.form.value['DateTime']).format('DD.MM.YYYY')
    }).subscribe(res => {})
  }

}
