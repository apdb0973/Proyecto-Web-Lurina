import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import {HttpClientModule}           from '@angular/common/http';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { HomeComponent }            from './home/home.component';
import { NavbarComponent }          from './shared/navbar/navbar.component';
import { CategoriaListComponent }   from './entities/categorias/categorias-list/categoria-list.component';
import { CategoriaDetailComponent } from './entities/categorias/categorias-detail/categorias-detail.component';

import { CategoriaComponent }       from './entities/admin/categoria/categoria.component';
import { CategoriaFormComponent }   from './entities/admin/categoria-form/categoria-form.component';
import { FormsModule }              from '@angular/forms';


import { FontAwesomeModule }        from '@fortawesome/angular-fontawesome';
import { ItemListComponent } from './entities/Items/Items-list/items-list.component';
import { ItemDetailComponent } from './entities/Items/Items-detail/items-detail.component';
import { ItemComponent } from './entities/admin/Items/Items.component';
import { ItemFormComponent } from './entities/admin/Items-forms/Items-form.component';
import { UsuarioListComponent } from './entities/Usuarios/Usuarios-list/Usuarios-list.component';
import { UsuarioDetailComponent } from './entities/Usuarios/Usuarios-detail/Usuarios-detail.component';
import { UsuarioComponent } from './entities/admin/Usuarios/Usuarios.component';
import { UsuarioFormComponent } from './entities/admin/Usuarios-forms/Usuarios-form.component';
import { PipePipe } from './shared/pipes/pipe.pipe';
import { BackFavoritoPipe } from './shared/pipes/back-favorito.pipe';
import { BackCheckPipe } from './shared/pipes/back-check.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    
    CategoriaListComponent,
    CategoriaDetailComponent,
    CategoriaComponent,
    CategoriaFormComponent,
    
    
    ItemListComponent,
    ItemDetailComponent,
    ItemComponent,
    ItemFormComponent,
    //ItemPagComponent,

    UsuarioListComponent,
    UsuarioDetailComponent,
    UsuarioComponent,
    UsuarioFormComponent,
    //UsuarioPagComponent,
    PipePipe,
    BackFavoritoPipe,
    BackCheckPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
