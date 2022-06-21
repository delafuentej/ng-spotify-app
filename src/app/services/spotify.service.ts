import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){

    const headers= new HttpHeaders({
      'Authorization':'Bearer BQDkU40E862mb4hDyECWoCURQnvLHuyLWfuRH_axWotY-oYU_qwvulmO_vL80my2UOqbIz1uYBjQ8K2B765Jfr2vfRN0r1swVShEs7cgJY8rrrnPSweT'
    })
    this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers })
    .subscribe(data=>{
      console.log(data)
    })

  }
}
