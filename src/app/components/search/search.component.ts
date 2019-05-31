import { Component } from '@angular/core';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artistas:any[]=[];
  cargando:boolean;
  constructor(private spotify:SpotifyService) { }

  buscar(termino:string){
    this.cargando=true;
    if (termino!=''){
      this.spotify.getArtistas(termino).subscribe((data:any)=>{
        console.log(data);
        this.artistas=data;
        this.cargando=false;
      });
    }else{
      this.cargando=false;
      this.artistas=[];

    }


  }


}
