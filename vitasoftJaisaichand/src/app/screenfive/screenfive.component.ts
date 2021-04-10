import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-screenfive',
  templateUrl: './screenfive.component.html',
  styleUrls: ['./screenfive.component.scss']
})
export class ScreenfiveComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private mainservice:MainService, private router:Router) { }

  ngOnInit() {
  }

  @ViewChild('password',{static:false}) password: ElementRef;
  @ViewChild('confpassword',{static:false}) confpassword: ElementRef;

  passwordsChanged(){
    console.log('passwordss')
    console.log(this.password.nativeElement.value)
    console.log(this.confpassword.nativeElement.value)
    if(this.password.nativeElement.value!=this.confpassword.nativeElement.value){
      this.passwordError = true
    }else if(this.password.nativeElement.value==this.confpassword.nativeElement.value){
      this.passwordError = false
    }
  }

  passwordError = false;

  

  finalForm = this.formBuilder.group({
    firstname:['',[Validators.required]],
    lastname:['',[Validators.required]],
    middlename:['',[Validators.required]],
    namesuffix:['',[Validators.required]],
    height:['',[Validators.required,Validators.pattern("[0-9]*")]],
    weight:['',[Validators.required,Validators.pattern("[0-9]*")]],
    ethnicity:['',[Validators.required]],
    // otheranswer:[''],
    // credentials:['',[Validators.required]],
    // practiceId:[false],
    gender:['',[Validators.required]],
    dateofbirth:['',[Validators.required]],
    address:['',[Validators.required]],
    city:['',[Validators.required]],
    state:['',[Validators.required]],
    zipcode:['',[Validators.required,Validators.minLength(2),Validators.maxLength(6),Validators.pattern("[0-9]*")]],
    country:['',[Validators.required]],
    phonenumber:['',[Validators.required,Validators.pattern("[0-9]*")]],
  
  
    emailaddress:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]],
    confirmpassword:['',[Validators.required,Validators.minLength(8)]],
    // hear:['',[Validators.required]]

  })

  submitCreate(form){
    console.log(form);
    if(form){
      if(form.status){
        if(form.status=='INVALID'){
          this.mainservice.triggerSnackbar('Oops!... The details you entered are not valid...');
        }else if(form.status=='VALID'){
          this.createclientAccount(form);
        }
      }
    }
  }

  createclientAccount(form){
    console.log(form.value);

    try{
      if(localStorage.getItem('clients')){
        let clientsArray = [...JSON.parse(localStorage.getItem('clients'))]
        clientsArray.push({...form.value})
        localStorage.setItem('clients',JSON.stringify(clientsArray))
      }else{
        let clientsArray = []
        clientsArray.push({...form.value})
        localStorage.setItem('clients',JSON.stringify(clientsArray))
      }
    }catch{
      (err)=>{
        this.mainservice.triggerSnackbar('Something went wrong 😞');
        return;
      }
    }

    this.mainservice.triggerSnackbar('Account created succesfully 🎉 🎊');

    setTimeout(()=>{
      this.router.navigateByUrl('/signuporlogin')
    },1000)
  }

}
