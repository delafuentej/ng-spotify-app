import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){

    const headers= new HttpHeaders({
      'Authorization':'Bearer BQBFEXCKMhRGX3W2QUBYB8FQ5WZ6R8IvHPsaBy_hky35me5axDhQFfrML7BBIquWV0Zg1CY9pZsiacK0qJbcwzDIsNIrlvdJ56qTDsQZfQkfotEhNPMa'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers })
    /* .subscribe(data=>{
      console.log(data)
    })
 */
  }
}
