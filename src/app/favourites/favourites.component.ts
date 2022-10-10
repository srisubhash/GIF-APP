import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { Gif } from '../gif';
import { GifserviceService } from '../gifservice.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
gifList:Array<Gif>;
userid:String;
  constructor(private gifservice:GifserviceService,private authservice:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
    this.userid=sessionStorage.getItem('userid');
    this.gifservice.getMyFavourites(this.userid).subscribe((data:any)=>
    {
      this.gifList=data;
     
    });
    
  }
//deleting from favourites
  delete(gif){
    console.log("delete called");
    this.gifservice.deleteFromMyFavourites(gif).subscribe((data: any)=>{
      console.log(data)
    });
    alert("deleted successfully");
    this.ngOnInit();

  }
//loging out users
  logoutUser(){
    console.log("BEFORE CALLING THE FUNCTION");
    this.authservice.removeToken();
    this.router.navigate(['/Home']);
  }

}
