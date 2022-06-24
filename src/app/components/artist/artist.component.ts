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

  constructor(private activatedRoute: ActivatedRoute,
              private SpotifyService: SpotifyService) { 
  this.loadingArtist=true;
    this.activatedRoute.params.subscribe((params) =>{
     this.getArtist(params['id']);
    /*  this.loadingArtist=false; */
    })
  }
  getArtist(id: string){
    this.loadingArtist=true;
    this.SpotifyService.getArtist(id)
    .subscribe(artist =>{
      this.artist= artist;
      console.log(artist)
      this.loadingArtist=false;
    })

  }


}
