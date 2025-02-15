import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAPIService {


server_url:string="https://user-portal-angular.onrender.com"
  constructor(private http:HttpClient,private router:Router) { }


  authenticate(email:string,password:string){
    this.http.get(`${this.server_url}/users/1`).subscribe((result:any)=>{
      
      if(result.email==email && result.password==password){
        sessionStorage.setItem("adminDetails",JSON.stringify(result))
       alert("Login success")
       this.router.navigateByUrl('dashboard')
      }else{
        alert("invalid email/password")
      }
    })
  }


  getAdminDetails(){
    return this.http.get(`${this.server_url}/users/1`)
  }

  updateAdminDetails(adminDetails:any){
    return this.http.put(`${this.server_url}/users/1`,adminDetails)
  }


  isAuthorized(){
    return !!sessionStorage.getItem("adminDetails")
  }
}
