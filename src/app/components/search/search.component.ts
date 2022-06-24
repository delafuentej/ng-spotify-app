import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists:any[]=[];
  loading:boolean=false;

  
  constructor(private spotifyService: SpotifyService) {}

  
  searchArtist( searchTerm:string ){
     this.loading=true
    this.spotifyService.getArtists(searchTerm)
    .subscribe((data:any)=>{
      this.artists= data;
      console.log(this.artists)
      this.loading=false;
      
    })
    
  }
}
