import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 paymentForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private service: HttpService
    ,private router: Router) {
    this.paymentForm = this.formBuilder.group({
      paymentMethod: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3,4}')]],
      otp: ['', Validators.required],
      confirmOtp: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
 
  paymentMethods: string[] = ['Credit Card', 'Debit Card', 'Wallet'];
  submitPaymentForm() {
    console.log(this.paymentForm.value);
    if (this.otp === this.confirmOtp) {
      alert('Payment successful!'); 
      this.ChangeBillStatus();
      this.router.navigate(['/transaction-history']);
      
    } else {
      alert('OTP mismatch Please enter correct OTP.');
    }
    
  }

  generateOTP() {
    this.otp = Math.floor(1000 + Math.random() * 9000).toString();
  }
  bill:string='';
  ChangeBillStatus(){
    this.service.changeBillStatus()
    .subscribe((response:any)=>
    {
       console.log(response);
       this.bill=response;
  
    })
   }

}
