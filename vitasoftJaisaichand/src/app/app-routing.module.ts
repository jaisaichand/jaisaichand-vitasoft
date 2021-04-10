import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenoneComponent } from './screenone/screenone.component';
import { ScreentwoComponent } from './screentwo/screentwo.component';
import { ScreenthreeComponent } from './screenthree/screenthree.component';
import { ScreenfiveComponent } from './screenfive/screenfive.component';
import { TermsComponent } from './terms/terms.component';
import { CreatecontainerComponent } from './createcontainer/createcontainer.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { AuthGuardService } from './profileActivate.service';



const routes: Routes = [
  {path:'signuporlogin',component:ScreenoneComponent},
  {path:'createaccount',component:ScreentwoComponent},
  {path:'create-specific/:variant',component:ScreenthreeComponent},
  {path:'create-patient-account',component:ScreenfiveComponent},
  {path:'terms-and-conditions',component:TermsComponent},
  {path:'account',component:AccountpageComponent },
  {path:'**',redirectTo:'signuporlogin',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
