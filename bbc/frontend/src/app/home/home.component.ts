import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bills:any[]=[];
  constructor(private router:Router,
    private service: HttpService) { }

  

  ngOnInit(): void {
    this.GetBillDetails();
  }
  selectedBill: any;

  onPayClick(bill:any) {
    if (bill.billStatus === 'unPaid') {
      this.router.navigate(['/payment']);
    }
  }
GetBillDetails(){
     this.service.getBillDetails()
     .subscribe((response:any)=>
     {
        console.log(response);
        this.bills=response;
   
     })
    }
}



