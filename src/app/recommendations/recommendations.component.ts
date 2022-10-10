import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { Gif } from '../gif';
import { GifserviceService } from '../gifservice.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
 gifList :any[]=[];
 gif:Gif=new Gif();
  constructor(private gifservice:GifserviceService,private authservice:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
   this.gifservice.Trending().subscribe((res : any)=>
  //  
  this.gifList=res.data);
   

  }
//adding gifs to favourites list
  public AddToFav(gifs){
    console.log("ADD TO FAV");
   this.gif.userid=sessionStorage.getItem('userid');
   this.gif.id=gifs.id;
   this.gif.url=gifs.images.fixed_height_downsampled.url;
   this.gifservice.addToFavourites(this.gif).subscribe((data)=>{
     if(data){
       alert("Added to Favourites");
     }},(err:HttpErrorResponse)=>{
       alert("error adding to Favourites");
     }
   );
    
   
  }

//logout users
  logoutUser(){
    console.log("BEFORE CALLING THE FUNCTION");
    this.authservice.removeToken();
    this.router.navigate(['/Home']);
  }


}
