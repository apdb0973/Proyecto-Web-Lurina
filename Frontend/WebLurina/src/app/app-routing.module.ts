import { Component, NgModule }      from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { HomeComponent }            from './home/home.component';

import { CategoriaListComponent }   from './entities/categorias/categorias-list/categoria-list.component';
import { CategoriaFormComponent }   from './entities/admin/categoria-form/categoria-form.component';
import { CategoriaDetailComponent } from './entities/categorias/categorias-detail/categorias-detail.component';
import { CategoriaComponent }       from './entities/admin/categoria/categoria.component';

import { ItemListComponent }        from './entities/Items/Items-list/items-list.component';
import { ItemFormComponent }        from './entities/admin/Items-forms/Items-form.component';
import { ItemDetailComponent }      from './entities/Items/Items-detail/items-detail.component';
import { ItemComponent }            from './entities/admin/Items/Items.component';

import { UsuarioListComponent }     from './entities/Usuarios/Usuarios-list/Usuarios-list.component';
import { UsuarioFormComponent }     from './entities/admin/Usuarios-forms/Usuarios-form.component';
import { UsuarioDetailComponent }   from './entities/Usuarios/Usuarios-detail/Usuarios-detail.component';
import { UsuarioComponent }         from './entities/admin/Usuarios/Usuarios.component';


const routes: Routes = [

 { path:"",                                       component:  HomeComponent,              pathMatch:'full'},
 { path:'categorias',                             component:  CategoriaListComponent,     pathMatch:'full'},
 { path:'admin/categorias',                       component:  CategoriaComponent,         pathMatch:'full'},
 { path:'admin/categorias/nueva',                 component:  CategoriaFormComponent,     pathMatch:'full'},
 { path:'admin/categorias/editar/:categoriaid',   component:  CategoriaFormComponent,     pathMatch:'full'},
 { path:'categorias_detail/:categoriaid',         component:  CategoriaDetailComponent,   pathMatch:'full'},
 
 
 { path:'items/:cat',                             component:  ItemListComponent,          pathMatch:'full'},
 { path:'admin/items',                            component:  ItemComponent,              pathMatch:'full'},
 { path:'admin/items/nueva',                      component:  ItemFormComponent,          pathMatch:'full'},
 { path:'admin/items/editar/:itemid',             component:  ItemFormComponent,          pathMatch:'full'},
 { path:'items_detail/:itemid',                   component:  ItemDetailComponent,        pathMatch:'full'},
 //{ path:'admin/items-pag',                        component:  ItemPagComponent,           pathMatch:'full'},
 
 { path:'usuarios',                               component:  UsuarioListComponent,          pathMatch:'full'},
 { path:'admin/usuarios',                         component:  UsuarioComponent,              pathMatch:'full'},
 { path:'admin/usuarios/nueva',                   component:  UsuarioFormComponent,          pathMatch:'full'},
 { path:'admin/usuarios/editar/:usuarioid',       component:  UsuarioFormComponent,          pathMatch:'full'},
 { path:'usuarios_detail/:itemid',                component:  UsuarioDetailComponent,        pathMatch:'full'},
 //{ path:'admin/usuarios-pag',                     component:  UsuarioPagComponent,           pathMatch:'full'},
 
 
 { path:'**',redirectTo:'',                                                               pathMatch:'full'}


 
];

@NgModule({
  imports:  [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
