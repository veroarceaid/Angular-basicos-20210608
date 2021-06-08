import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent{

   get historial(){
      return this.GifsService.historial;
    };

    constructor(private GifsService:GifsService){}

    buscar( item : string ){
      item = item.trim().toLocaleLowerCase();
      console.log(item);
     
      this.GifsService.buscarGifs(item); 
    }
}
