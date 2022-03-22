import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import {HttpClientModule}           from '@angular/common/http';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { HomeComponent }            from './home/home.component';
import { NavbarComponent }          from './shared/navbar/navbar.component';
import { CategoriaListComponent }   from './entities/categoria/categoria-list/categoria-list.component';
import { CategoriaDetailComponent } from './entities/categoria/categoria-detail/categoria-detail.component';
import { EpicoPipe }                from './shared/pipes/epico.pipe';
import { CategoriaComponent }       from './entities/admin/categoria/categoria.component';
import { CategoriaFormComponent }   from './entities/admin/categoria-form/categoria-form.component';
import { FormsModule }              from '@angular/forms';
import { BackEpicoPipe }            from './shared/pipes/back-epico.pipe';
import { CategoriaPagComponent }    from './entities/admin/categoria-pag/categoria-pag.component';
import { FontAwesomeModule }        from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CategoriaListComponent,
    CategoriaDetailComponent,
    EpicoPipe,
    CategoriaComponent,
    CategoriaFormComponent,
    BackEpicoPipe,
    CategoriaPagComponent,
    
    
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
