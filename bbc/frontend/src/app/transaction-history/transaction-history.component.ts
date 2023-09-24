import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Bill } from '../model/Bill';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  transaction !: Bill[]; 
  constructor( private service: HttpService) { }

  ngOnInit(): void {
    this.GetPaymentReceipt();
  }
  receipt:any[]=[];
  GetPaymentReceipt(){
    this.service.getPaymentReceipt()
    .subscribe((response:any)=>
    {
       console.log(response);
       this.transaction=response;
  
    })
   }
}
