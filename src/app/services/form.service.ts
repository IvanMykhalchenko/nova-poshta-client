import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) { }

  public createForm() {
    return this.fb.group({
      CitySender: ['', Validators.required],
      CityRecipient: ['', Validators.required],
      SenderAddress: ['', Validators.required],
      RecipientAddress: ['', Validators.required],
      PayerType: ['', Validators.required],
      PaymentMethod: ['', Validators.required],
      DateTime: ['', Validators.required],
      CargoType: ['', Validators.required],
      Weight: ['', Validators.required],
      ServiceType: ['', Validators.required],
      SeatsAmount: ['', Validators.required],
      Description: ['', Validators.required],
      Cost: ['', Validators.required],
      Sender: ['', Validators.required],
      ContactSender: ['', Validators.required],
      SendersPhone: ['', Validators.required],
      Recipient: ['', Validators.required],
      ContactRecipient: ['', Validators.required],
      RecipientsPhone: ['', Validators.required],
    })
  }

}
