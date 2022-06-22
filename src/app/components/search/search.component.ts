import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists:any[]=[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }
  searchArtist( searchTerm:string ){
    this.spotifyService.getArtist(searchTerm)
    .subscribe((data:any)=>{
      console.log(data.artists.items)
      this.artists= data.artists.items;
    })
    
  }
}
