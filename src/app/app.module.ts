import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { SignupComponent } from './page/signup/signup.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './page/nav/nav.component';
import { RegistrarComponent } from './page/registrar/registrar.component';
import { InmuebleComponent } from './page/inmueble/inmueble.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { UserComponent } from './principal/user/user.component';
import { AsesorComponent } from './page/asesor/asesor.component';
import { ListadoAsesorComponent } from './page/listado-asesor/listado-asesor.component';
import { ListadoComponent } from './listado/listado.component';
@NgModule({
  declarations: [
    AppComponent,
    
    ReservaComponent,
    UsuariosComponent,
    SignupComponent,
    NavComponent,
    RegistrarComponent,
    InmuebleComponent,
    UserComponent,
    AsesorComponent,
    ListadoAsesorComponent,
    ListadoComponent,
    
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
