import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SelectItem } from 'primeng/api';
import { RequestsApiService } from '../../services/requests-api.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public areas: Observable<SelectItem> = this.api.getAreas();
  public cities: Observable<SelectItem>;
  public departments: Observable<SelectItem>
  public isDisableCities: boolean = true;
  public isDisableDepartments: boolean = true;

  constructor(
    private fb: FormBuilder,
    private api: RequestsApiService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      area: ['', Validators.required],
      city: ['', Validators.required],
      department: ['', Validators.required]
    })
  }

  public getCities(ref: string) {
    this.cities = this.api.getCities(ref);
    this.isDisableCities = false;
  }

  
  public getDepartments(ref: string) {
    this.departments = this.api.getDepartments(ref);
    this.isDisableDepartments = false;
  }

  public onSubmit() {

  }

}
