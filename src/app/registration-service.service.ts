import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserRegistrationComponent} from '../app/user-registration/user-registration.component'


@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http:HttpClient) {


   }
   //registering
   public doRegistration(user){
     console.log("DOREGISTER SERVICE CALLED");
     console.log(user);
     return this.http.post("http://localhost:8080/api/v1/user",user,{responseType:'text' as 'json'});
   }
}
