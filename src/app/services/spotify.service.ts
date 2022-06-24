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
      'Authorization':'Bearer BQB4Bqrwq87wH7YtQCGq1tjMMZnnve_cNGNuW9p9jFSNkav_0ltkrTxnItrQATc4cI_N3d1JS_vUu0hyDfRjiPEy2Y3bVwEyhgkWIEoaTT4rVzpHCqr_wXbsBvIgMO2alGzLu9zIj9mAWFvcTSPQBgo0H4ioQLoDtvFHMvyuvFPP'
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
