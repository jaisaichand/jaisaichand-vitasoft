import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-screenthree',
  templateUrl: './screenthree.component.html',
  styleUrls: ['./screenthree.component.scss']
})
export class ScreenthreeComponent implements OnInit, OnDestroy {

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder, private mainservice:MainService) { }

  paramsSubscription:Subscription;
  variant:String ;
  @ViewChild('password',{static:false}) password: ElementRef;
  @ViewChild('confpassword',{static:false}) confpassword: ElementRef;

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe((success)=>{
      console.log(success);
      if(success){
        if(success.variant){
          switch(success.variant){
            case 'us' :
              this.finalForm = this.usForm
              this.variant = success.variant;
              break;

            case 'others' :
              this.finalForm = this.OtherForm;
              this.variant = success.variant;
              break;

            default:
              this.router.navigateByUrl('/signuporlogin')
          }
        }
      }
    })
  }

  usForm = this.formBuilder.group({
    firstname:['',[Validators.required]],
    lastname:['',[Validators.required]],
    npiNumber:['',[Validators.required,Validators.pattern("[0-9]*")]],
    credentials:['',[Validators.required]],
    practiceId:[false],
    practicename:['',[Validators.required]],
    address:['',[Validators.required]],
    city:['',[Validators.required]],
    state:['',[Validators.required]],
    zipcode:['',[Validators.required,Validators.minLength(2),Validators.maxLength(6),Validators.pattern("[0-9]*")]],
    country:['',[Validators.required]],
    phonenumber:['',[Validators.required,Validators.pattern("[0-9]*")]],
    faxnumber:['',[Validators.required,Validators.pattern("[0-9]*")]],
    website:['',[Validators.required]],
    emailaddress:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]],
    confirmpassword:['',[Validators.required,Validators.minLength(8)]],
    hear:['',[Validators.required]]

  })

  OtherForm = this.formBuilder.group({
    firstname:['',[Validators.required]],
    lastname:['',[Validators.required]],
    otheranswer:[''],
    credentials:['',[Validators.required]],
    practiceId:[''],
    practicename:['',[Validators.required]],
    address:['',[Validators.required]],
    city:['',[Validators.required]],
    state:['',[Validators.required]],
    zipcode:['',[Validators.required,Validators.minLength(2),Validators.maxLength(6),Validators.pattern("[0-9]*")]],
    country:['',[Validators.required]],
    phonenumber:['',[Validators.required,Validators.pattern("[0-9]*")]],
    faxnumber:['',[Validators.required,Validators.pattern("[0-9]*")]],
    website:['',[Validators.required]],
    emailaddress:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]],
    confirmpassword:['',[Validators.required,Validators.minLength(8)]],
    hear:['',[Validators.required]]

  })

  submitCreate(form){
    // console.log(form);
    if(form){
      if(form.status){
        if(form.status=='INVALID'){
          this.mainservice.triggerSnackbar('Oops!... The details you entered are not valid...');
        }else if(form.status=='VALID'){
          this.createSellerAccount(form);
        }
      }
    }
  }

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

  createSellerAccount(form){
    console.log(form.value);
    if(this.passwordError){
      this.mainservice.triggerSnackbar('Password and confirm password didnt match..');
      return;
    }

    try{
      if(localStorage.getItem('providers')){
        let providersArray = [...JSON.parse(localStorage.getItem('providers'))]
        providersArray.push({...form.value})
        localStorage.setItem('providers',JSON.stringify(providersArray))
      }else{
        let providersArray = []
        providersArray.push({...form.value})
        localStorage.setItem('providers',JSON.stringify(providersArray))
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

  options = ["ACNP","ANP","CCN","HNP","LNP","RPA"]

  finalForm = this.formBuilder.group({}) ;

  createForm(opt){
    if(opt=='us'){
      this.finalForm = this.usForm
    }

    else if(opt=='others'){
      this.finalForm = this.OtherForm;
    }
  }

  ngOnDestroy(){
    if(this.paramsSubscription){
      this.paramsSubscription.unsubscribe();
    }
  }

  hearOptions = ['social media','news letter','blog','other']

}
