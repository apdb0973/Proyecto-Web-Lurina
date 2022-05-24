import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario.model';
import { UsuarioService } from '../Usuarios.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  title = " Usuarios mejoradas"

  Usuarios:Usuario[]=[];
  
  

    constructor(private serviciousuarios:UsuarioService) { }
  
    ngOnInit(): void {


      this.serviciousuarios.obtenerUsuarios().subscribe(resultado=>{this.Usuarios = resultado});

      
    }

    




}



