import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){

    const headers= new HttpHeaders({
      'Authorization':'Bearer BQA7V8l35Ik8j5Z1CzOBJBSjHx8bq5sichSX5WFnY296SFIvKCiFldw43qLjUFkO_acGJ76wd48DH9oItVEYiFzaivq2JCddwzsVFnlxjI_GSBtNc9c'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers })
      .pipe( map( (data:any) => data.albums.items))

    
  }
  getArtist(searchTerm:string){
    const headers= new HttpHeaders({
      'Authorization':'Bearer BQA7V8l35Ik8j5Z1CzOBJBSjHx8bq5sichSX5WFnY296SFIvKCiFldw43qLjUFkO_acGJ76wd48DH9oItVEYiFzaivq2JCddwzsVFnlxjI_GSBtNc9c'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${ searchTerm }&type=artist&limit=15`, {headers})
    .pipe( map( (data:any)=> data.artists.items))
  }
}
