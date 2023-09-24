import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
url:string=environment.baseUrl;
url2:string="http://localhost:8081/bill/";
url3:string="http://localhost:8081/bill/";
url4:string="http://localhost:8081/bill/"
constructor(private http:HttpClient) { }


login(obj:any){
  return (this.http.post(`${this.url}customer-login`,obj,{responseType:'text'}));
}

getBillDetails(){
  return (this.http.get(`${this.url2}getbill?customerId=1`))
}
changeBillStatus(){
  return (this.http.put(`${this.url3}updateBillStatus?billNumber=1`,null))
}
getPaymentReceipt(){
  return (this.http.get(`${this.url4}billnumber?billNumber=1`))
}
}
