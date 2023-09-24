import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit, OnDestroy {
  isShow: boolean = true;
  incorrect: string = '';

  constructor(
    private service: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    document.body.className = "background";
  }

  onShow() {
    this.isShow = !this.isShow;
  }

  onSubmit(f: NgForm) {
    let obj = {
      customerId: f.value.customerId,
      otp: f.value.otp
    };

    this.service.login(obj)
      .subscribe(
        (response: any) => {
          this.router.navigate(['/home'])
          if (response === 'Login successful') {
          console.log(response);
          this.router.navigate(['/home'])
           
            sessionStorage.setItem("customerName", response.customerName);
           
          } else {
            this.incorrect =response; 
          }
        },
        (error) => {
          console.error(error);
          this.incorrect = 'An error occurred during login'; 
        }
      );
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

}
