import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screenone',
  templateUrl: './screenone.component.html',
  styleUrls: ['./screenone.component.scss']
})
export class ScreenoneComponent implements OnInit {

  constructor(private mainService:MainService, private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
  }

  clients=[]
  providers=[]

  email='';
  password='';




  selectedTab = 'client'

  selectTab(opt){
    this.selectedTab = opt
  }

  loginToApp(){
    if(this.email==''||this.password==''){
      this.mainService.triggerSnackbar('Email and Password feilds cant be empty');
      return;  
    }
    this.mainService.triggerSnackbar('Please wait.....');
   if(this.selectedTab=='provider'){
    try{
      //console.log(localStorage.getItem('providers'))
      if(localStorage.getItem('providers')){
        this.providers = JSON.parse(localStorage.getItem('providers'));
        this.providers.forEach((val,ind)=>{
          if(val){
            if(val.emaildaddress==this.email){
              if(val.password==this.password){
                localStorage.setItem('currently',JSON.stringify({data:val}))
                this.mainService.triggerSnackbar('Logging In , please wait...');
              }else{
                this.mainService.triggerSnackbar('Wrong password!! try Again');
              }
            }
          }
        })
      }else{
        this.mainService.triggerSnackbar('No details found, Please check after creating an account');
      }
    }catch{
      this.mainService.triggerSnackbar('Something went wrong 😞');
    }
   }

   else if(this.selectedTab=='client'){
     console.log('clients')
    try{
      if(localStorage.getItem('clients')){
        console.log('clients')
        this.clients = JSON.parse(localStorage.getItem('clients'));
        console.log(this.clients)
        console.log(this.email)
        this.clients.forEach((val,ind)=>{
          if(val){
            console.log(val)
            if(val.emailaddress==this.email){
              console.log(val.password)
              console.log(this.password)
              console.log(typeof(this.password))
              console.log(typeof(val.password))
              if(val.password==this.password){
                // alert('gh')
                localStorage.setItem('currently',JSON.stringify(val))
                this.mainService.triggerSnackbar('Logging In , please wait...');
                this.router.navigateByUrl('/account')
              }else{
                this.mainService.triggerSnackbar('Wrong password!! try Again');
              }
            }
          }
        })

      }else{
        console.log('clients')
        this.mainService.triggerSnackbar('No details found, Please check after creating an account');
      }
    }catch{
      this.mainService.triggerSnackbar('Something went wrong 😞');
    }
   }
  }

}
