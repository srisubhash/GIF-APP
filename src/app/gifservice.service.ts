import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gif } from './gif';
import {from} from 'rxjs'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GifserviceService {
  API_KEY: string = "8XADJBZWvzB75qIDyCpfWLbnE5otD7wG";
  gifEndpoint: string;
  springEndpoint: string;
  constructor(private http:HttpClient) { 
    this.gifEndpoint="https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY}&q="
    this.springEndpoint = 'http://localhost:8081/api/v1/favourites';
  }
  public searchGif(searchkey: String){
    
   return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY}&q=${searchkey}&limit=50`);
   
   
}
//getting trending gifs for recommending to users
public Trending(){


  return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.API_KEY}&limit=50`);

}

//for adding to favourites
addToFavourites(gif){
  return this.http.post(this.springEndpoint, gif);
}
//delete from favourites
deleteFromMyFavourites(gif){
  console.log("delete from fav called");
  const url = `${this.springEndpoint}/${gif.userid}/${gif.id}`;
  return this.http.delete(url,{responseType: 'text'});
  
}

//for displaying all favourites of specific user
getMyFavourites(userid:String) {
  return this.http.get(`${this.springEndpoint}/${userid}`);

}




}
  

