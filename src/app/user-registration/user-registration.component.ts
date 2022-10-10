import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user:User=new User() ;

constructor(private service:RegistrationServiceService, private router: Router) { }
message:any;
  ngOnInit() {
    
  

  }
  //for registering users
  public registerNow(){
    
    this.service.doRegistration(this.user).subscribe((data)=>
    {
      console.log(data);
    },(err:HttpErrorResponse)=>{
      alert("user already exists");
    }
   
    );

    
    console.log(this.message);
    this.router.navigate(['/Login']);
  }
}
