import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  { path:'login', component: LoginComponent, pathMatch:"full"},
  { path: 'signup', component: SignupComponent, pathMatch:"full"},
  {path: 'profile',component:ProfileComponent, pathMatch:"full"}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
