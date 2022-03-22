import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categorias-detail',
  templateUrl: './categoria-detail.component.html',
  styleUrls: ['./categoria-detail.component.scss']
})
export class CategoriaDetailComponent implements OnInit {

  Categoriasfiltrado: Categoria[]=[];
  
  IdCategoria:         number=0;


  constructor(protected route: ActivatedRoute, private serviciopociones:CategoriaService) { }

  
  ngOnInit(): void {

    if (this.route.snapshot.params['categoriaid']) {

          this.IdCategoria = this.route.snapshot.params['categoriaid']
          
          console.log(this.IdCategoria);
    }
          
    this.Categoriasfiltrado=this.serviciopociones.obtenerCategorias_filtrada(this.IdCategoria);
    
  }

}
