
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  

  newReleases: any[]=[];
  loading:boolean;

  data:any[]=[]; 
  constructor(private spotifyService: SpotifyService ) { 
    
    this.loading=true;
    this.spotifyService.getNewReleases()
    .subscribe((data:any)=>{
      this.loading=true;
      /* console.log(data.albums.items) */
      this.newReleases= data;
      this.loading=false;
      
    })
  }

  

}
