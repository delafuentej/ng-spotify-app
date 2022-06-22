import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){

    const headers= new HttpHeaders({
      'Authorization':'Bearer BQBk71PIgGH1tDBSld3OrwnoE0qXRMYiyyMSt_s9OIRTJ1Abz3jwBNaGx46HWePO0d-cN0SAianWXbF_zDHXnCL9yEJh7ujqSgP1t6KLly9zSAVsIak'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers })
    /* .subscribe(data=>{
      console.log(data)
    })
 */
  }
}
