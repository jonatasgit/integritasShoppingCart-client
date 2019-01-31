import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/shared/services/data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;
  submitted = false;
  myTap: number;
  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      number: ['', Validators.required],
      name: ['', Validators.required],
      expirationDate: ['', Validators.required]
    });
    this.dataService.currentTap.subscribe(data => this.myTap = data);
  }

  // convenience getter for easy access to form fields
  get f() { return this.paymentForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.paymentForm.invalid) {
          return;
      }

      this.router.navigate(['accepted']);
  }

}
