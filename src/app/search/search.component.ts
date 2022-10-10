import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { Gif } from '../gif';
import {GifserviceService} from '../gifservice.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
gifList:any[]=[];
gif:Gif=new Gif();
userid:String;
  constructor(private gifservice:GifserviceService,private authservice:AuthserviceService,private router:Router) { }

  
  ngOnInit(): void {
  }
  onEnter(searchKey:String) {
      this.userid=sessionStorage.getItem('userid');
    if(searchKey==null ||searchKey.length==0) {
      alert('Search a valid Data');
     
     
    }

    console.log('Search Key', searchKey);
   this.gifservice.searchGif(searchKey).subscribe((res:any)=>{
   this.gifList=res.data;
  }
   );
  }
  //adding to favourites
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
    
   //logout
  }
  logoutUser(){
    console.log("BEFORE CALLING THE FUNCTION");
    this.authservice.removeToken();
    this.router.navigate(['/Home']);
  }

}

