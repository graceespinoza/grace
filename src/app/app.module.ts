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
import { InmuebleComponent } from './page/inmueble/inmueble.component';
import { NavComponent } from './page/nav/nav.component';
import { ReservaComponent } from './page/reserva/reserva.component';
@NgModule({
  declarations: [
    AppComponent,
    InmuebleComponent,
    ReservaComponent,
    UsuariosComponent,
    SignupComponent,
    NavComponent
    
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
