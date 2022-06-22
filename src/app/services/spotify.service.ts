import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query:string){
    const url=`https://api.spotify.com/v1/${query}`;

    const headers= new HttpHeaders({
      'Authorization':'Bearer BQCBSGHXynm4TlA8P223_7Dc51C3PJGFU8hKK49GJYkRdBrVam7aLCStBsCy5RECqHD-sgDUEgb-WQhzoVjIwGb3zJG_SYfWwhw8xgSAYnJwxfvG1z0'
    });

    return this.http.get(url, {headers})

  }

  getNewReleases(){
      return this.getQuery(`browse/new-releases`)
      .pipe( map( (data:any) => data.albums.items))
    
  }


  getArtist(searchTerm:string){
    return this.getQuery(`search?q=${ searchTerm }&type=artist&limit=15`)
    
    .pipe( map( (data:any)=> data.artists.items))
  }
}
