import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private service: HttpService
    ,private router: Router) { }

  ngOnInit(): void {
  }
 
  payment = {
    selectedPaymentMethod: '',
    accountNumber: '',
    cvv: ''
  };
  paymentMethods: string[] = ['Credit Card', 'Debit Card', 'Wallet'];

  otp = '';
  confirmOtp: string = '';
  cvv='';

  submitPaymentForm() {
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