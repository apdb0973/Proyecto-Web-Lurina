import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, tipo_de_item } from '../Item.model';
import { ItemService } from '../Item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemListComponent implements OnInit {

  title = " Items mejorados"

  Items:Item[]=[];
  Items_filtrados:Item[]=[];
  categoria: String="";
  
    constructor(protected route: ActivatedRoute,private servicioitems:ItemService) { }
  
    ngOnInit(): void {
      if (this.route.snapshot.params['cat']) {

        this.categoria = this.route.snapshot.params['cat']
  
      }

      this.Items_filtrados = this.servicioitems.obtenerItems_filtrados(this.Items,this.categoria);

      this.servicioitems.obtenerItems().subscribe(resultado=>{
        
        this.Items = resultado;        
        this.Items_filtrados = this.servicioitems.obtenerItems_filtrados(this.Items,this.categoria);  //Filtro los items de la base de datos
         console.log(this.Items);         
      
      });  //obtengo los items de la base de datos
     
           

      
    }

    cambiar_favorito(item: Item) {

                
          item.favorito = !item.favorito;
          this.servicioitems.editarItem(item).subscribe( (data: Item) => {}, )
          
      
    }
    
}

  
