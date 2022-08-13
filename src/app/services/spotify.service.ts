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
      'Authorization':'Bearer BQBHG7F8af2347CBydhWi9-ek6Y0yBXSfL3SgycN9C_vBCbFFDDZeHxgw4NZE3kv1736ma09Y2-q75oiTeVHo5jheL0kZaLwMXPoQeA0F8ytFJaQawI'
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
