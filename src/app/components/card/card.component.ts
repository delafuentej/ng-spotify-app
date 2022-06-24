import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() items:any[]=[]
  

  constructor(private router:Router) { }

  showArtist(item:any){
    let artistId:string;
    if( item.type === "artist"){
      artistId= item.id
    }else{
      artistId= item.artists[0].id;
    }
    this.router.navigate(['/artist', artistId])
  }

  

}
