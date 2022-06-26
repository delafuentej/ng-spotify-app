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
      'Authorization':'Bearer BQBb6dDpcP0nOImj9lvaHx3Y6RsFKuhLBhuN0qTGwxD7O-qB6fIN3bWaFD4dWwNb5yrvm-DBZLzDtRw-gsdZDi1e-M4mbKdo3kQe_EXj1MUC7kiFi9lrDhC6f2jsAn1T0STq_zw1X4OZnVz8st-X502Nvb3JX3BKBM4w7Wgj5mNC'
    });

    return this.http.get(url, {headers})

  }

  getNewReleases(){
      return this.getQuery(`browse/new-releases`)
      .pipe( map( (data:any) => data.albums.items))
    
  }


  getArtists(searchTerm:string){
    return this.getQuery(`search?q=${ searchTerm }&type=artist&limit=15`)
    
    .pipe( map( (data:any)=> data.artists.items))
  }

  getArtist(id:string){
    /* https://api.spotify.com/v1/artists/{id} */
    /*  */
    return this.getQuery(`artists/${ id }`)
    
    /* .pipe( map( (data:any)=> data.artists.items)) */
  }

  getTopTracks(id:string){
    
    /* https://api.spotify.com/v1/artists/{id}/top-tracks
 */
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map( (data:any)=> data.tracks));

    
    
  }
}
