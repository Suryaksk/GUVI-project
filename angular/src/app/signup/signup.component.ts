import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : any;
  submitted: boolean = false;

  
  constructor(private router: Router,private api: ApiService) { }

  ngOnInit(): void {
    
  
  }

  signup(form:NgForm){
    if(form.valid){
      console.log(form.value);
    //  this.api.saveuser(form.value).subscribe((res) =>{
    //   //console.log(JSON.stringify(res));
    //   if(res.code != "00000"){
    //       alert("error")
    //   }
    //   else{
    //     alert("login success");
    //   }
    // });
    if(form.value.password===form.value.confirmpassword){
      this.api.saveuser(form.value).subscribe((res) =>{
        //console.log(JSON.stringify(res));
        if(res.code != "00000"){
            alert("email already used!")
        }
        else{
          alert("login success");
          this.router.navigate(["/login"]);
        }
      });
    }else{
      alert("password & confirmpassword must be same!!")
    }
      sessionStorage.setItem('isloggedin','1');
    }else{
      console.log('invalid')

  }
  
}
 }
