import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = "http://localhost:8081/";
  constructor(private http:HttpClient) { }

  //create
  public saveuser(data:any){
    console.log(this.apiURL+"createuser");
    return this.http.post<any>(this.apiURL+"createuser",data);
  }

  //login
  public login(data:any){
    console.log(this.apiURL+"login");
    return this.http.post<any>(this.apiURL+"login",data);
  }

  //profile
  public profile(data:any){
    console.log(this.apiURL+"user");
    return this.http.put<any>(this.apiURL+"user",data);
  }

  public getUser(id: string){
    return this.http.get<any>(this.apiURL+"user", {params : {"id":id}});
  }


}
