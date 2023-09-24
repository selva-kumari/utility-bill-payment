import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  customerName:string|null='';
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.customerName=sessionStorage.getItem("customerName");
    console.log(this.customerName);
  }

  onLogout(){
      sessionStorage.removeItem("customerName");
      sessionStorage.clear();
      this.router.navigate(['/customer-login']);
  }

}