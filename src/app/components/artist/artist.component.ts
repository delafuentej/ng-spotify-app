import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artist:any={};
  loadingArtist:boolean;
  topTracks:any[]=[];

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) { 
  this.loadingArtist=true;
    this.activatedRoute.params.subscribe((params) =>{
     this.getArtist(params['id']);
     this.getTopTracks(params['id'])
    /*  this.loadingArtist=false; */
    })
  }
  getArtist(id: string){
    this.loadingArtist=true;
    this.spotifyService.getArtist(id)
    .subscribe(artist =>{
      this.artist= artist;
      console.log(artist)
      this.loadingArtist=false;
    })

  }

  getTopTracks(id: string){
    this.spotifyService.getTopTracks(id)
    .subscribe(topTracks=>{
      this.topTracks= topTracks;
      console.log(topTracks)
    })
  }


}
