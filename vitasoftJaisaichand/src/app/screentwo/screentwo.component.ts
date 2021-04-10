import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screentwo',
  templateUrl: './screentwo.component.html',
  styleUrls: ['./screentwo.component.scss']
})
export class ScreentwoComponent implements OnInit {

  constructor(private mainService:MainService, private router:Router) { }

  ngOnInit() {
  }

  clientOrProvider='Provider';

  npiNumber= '';

  isFromUs = true;

  changedIsUs(bool){
    this.isFromUs = bool;
  }

  clickedToChangeClientOrProvider(eve){
    console.log(eve);
    this.clientOrProvider = eve;
  }

  listOfApis = this.mainService.listOfNpis;

  checkNpiNumber(){

    if(this.clientOrProvider=='Client'){
      this.router.navigateByUrl('create-patient-account');
      return
    }else{
      console.log(this.npiNumber);
  
     if(this.isFromUs){
       console.log(typeof(this.listOfApis[0]))
       console.log(typeof(this.npiNumber))
      if(this.listOfApis.includes(String(this.npiNumber))){
        this.mainService.triggerSnackbar('Valid NPI number');
        this.router.navigateByUrl('create-specific/us')
      }else{
        this.mainService.triggerSnackbar('Invalid NPI number');
      }
     }else{
      this.router.navigateByUrl('create-specific/others')
     }
    }

      // this.mainService.checkNpi(this.npiNumber).subscribe((success)=>{
      //   console.log(success)
      // },(err)=>{
      //   console.log(err)
      // })
    }
  

}
