import { Component, OnInit } from '@angular/core';
import { Categoria, tipo_de_categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

  title = " Pociones magicas mejoradas"

  Categorias:Categoria[]=[];
  
  // Potions_vida:    Potion[]=[];
  // Potions_mana:    Potion[]=[];
  // Potions_energia: Potion[]=[];

    constructor(private serviciocategorias:CategoriaService) { }
  
    ngOnInit(): void {


      this.serviciocategorias.obtenerCategorias().subscribe(resultado=>{this.Categorias = resultado});

      // this.Potions=this.serviciopociones.obtenerpociones();
      
      

      // this.Potions_vida= this.Potions.filter(variable => variable.t_pocion == tipo_de_pocion.VIDA)
      // this.Potions_mana= this.Potions.filter(variable => variable.t_pocion == tipo_de_pocion.MANA)
      // this.Potions_energia= this.Potions.filter(variable => variable.t_pocion == tipo_de_pocion.ENERGIA)
      
    }

    




}



