import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      firstName: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.paymentForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.paymentForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')
  }

}
