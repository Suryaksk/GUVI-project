import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/api.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: any;
 
  constructor(private router: Router, private route:ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((res) => {
      console.log(res.id);
      this.api.getUser(res.id).subscribe((res) => {
        this.data = res;
        console.log(this.data);
      });
    });
  }

update(form:NgForm){
  if(form.valid){
    // console.log(form.value.age);
    this.data.age=form.value.age;
    this.data.gender=form.value.gender;
    this.data.dob=form.value.dob;
    this.data.tel=form.value.tel;
    console.log(this.data)
    this.api.profile(this.data).subscribe((res) => {
      console.log(res);
      alert("Details added successfully");
     
    });
   
  }else{
    console.log('invalid')
  }
}
}
