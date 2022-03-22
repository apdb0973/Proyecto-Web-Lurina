import { Component, NgModule }      from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { CategoriaPagComponent }    from './entities/admin/categoria-pag/categoria-pag.component';
import { CategoriaFormComponent }   from './entities/admin/categoria-form/categoria-form.component';
import { CategoriaComponent }       from './entities/admin/categoria/categoria.component';
import { Categoria }                from './entities/categoria/categoria.model';
import { CategoriaDetailComponent } from './entities/categoria/categoria-detail/categoria-detail.component';
import { CategoriaListComponent }   from './entities/categoria/categoria-list/categoria-list.component';
import { HomeComponent }            from './home/home.component';

const routes: Routes = [

 { path:"",                                       component:  HomeComponent,              pathMatch:'full'},
 { path:'categorias',                             component:  CategoriaListComponent,     pathMatch:'full'},
 { path:'admin/categorias',                       component:  CategoriaComponent,         pathMatch:'full'},
 { path:'admin/categorias/nueva',                 component:  CategoriaFormComponent,     pathMatch:'full'},
 { path:'admin/categorias/editar/:categoriaid',   component:  CategoriaFormComponent,     pathMatch:'full'},
 { path:'categorias_detail/:categoriaid',         component:  CategoriaDetailComponent,   pathMatch:'full'},
 { path:'admin/categorias-pag',                   component:  CategoriaPagComponent,      pathMatch:'full'},
 { path:'**',redirectTo:'',                                                             pathMatch:'full'}

];

@NgModule({
  imports:  [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
