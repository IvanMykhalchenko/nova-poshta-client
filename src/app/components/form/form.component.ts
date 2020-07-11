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
  form: FormGroup;
  areas: Observable<SelectItem> = this.api.getAreas();

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

}
