import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../Usuario.model';
import { UsuarioService } from '../Usuarios.service';

@Component({
  selector: 'app-usuarios-detail',
  templateUrl: './usuarios-detail.component.html',
  styleUrls: ['./usuarios-detail.component.scss']
})
export class UsuarioDetailComponent implements OnInit {

  Usuariosfiltrado: Usuario[]=[];
  
  IdUsuario:         number=0;


  constructor(protected route: ActivatedRoute, private serviciousuarios:UsuarioService) { }

  
  ngOnInit(): void {

    if (this.route.snapshot.params['usuarioid']) {

          this.IdUsuario = this.route.snapshot.params['usuarioid']
          
          console.log(this.IdUsuario);
    }
          
    this.Usuariosfiltrado=this.serviciousuarios.obtenerUsuarios_filtrada(this.IdUsuario);
    
  }

}
