import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  }
  

  login(form:NgForm){
    if(form.valid){
      console.log(form.value);
      this.api.login(form.value).subscribe((res) =>{
        //console.log(JSON.stringify(res));
        if(res.code != "00000"){
            alert("password or emailid must be wrong!!")
        }
        else{
          alert("login success");
          this.router.navigate(["/profile"], { queryParams: { id: res.id } });
        }
      });
      sessionStorage.setItem('isloggedin','1');
    }else{
      console.log('invalid')
    }
  }
}
