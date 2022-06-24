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
      'Authorization':'Bearer BQAd51VRtcmU2JA-X6bBdiYg_gd5MXLrmqpnBuJN9PeAJ3qZJVR7nTpTuiQZ_cdzgDuPfCVONcDuHfdRsjjHA1FZZSF5YfF29rXU8SNMebY-2EFxPNQcS8sJFgqNKvnM7KTFzzSVzxcFMR2GG2EuLkN-jmWdY_5N6STTzaq5MAWm'
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
}
