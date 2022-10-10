import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ok } from 'assert';
import { AuthserviceService } from '../authservice.service';
import { User } from '../user';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
user:User =new User;
message:any;

 // authService: any;
  constructor(private router:Router,private authService:AuthserviceService) { }
  ngOnInit(): void {

  }
  

//login user
  loginUser() {
    
    console.log("Login user data", this.user);
    this.authService.loginUser(this.user).subscribe(data =>{
      alert("Login successful");
      if(data['token']) {
        this.authService.setToken(data['token']);
        this.router.navigate(['/Recommendations']);
        this.handleResponse(this.user.userid);

      }
    },(err:HttpErrorResponse)=>{
      alert("Entered Username or Password is incorrect")});

  }



//for storing userid after login
  public handleResponse(userid){
    sessionStorage.setItem('userid',userid);

  }

}
