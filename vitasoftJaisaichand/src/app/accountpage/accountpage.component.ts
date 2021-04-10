import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.scss']
})
export class AccountpageComponent implements OnInit {

  constructor(private router:Router) { 
   
  }
data;
  ngOnInit() {
    if(localStorage.getItem('currently')){
this.data= JSON.parse(localStorage.getItem('currently'));
    }else{
      this.router.navigateByUrl('signuporlogin')
    }
  }

}
