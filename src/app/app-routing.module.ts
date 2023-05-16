import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { SignupComponent } from './page/signup/signup.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { InmuebleComponent } from './page/inmueble/inmueble.component';
import { NavComponent } from './page/nav/nav.component';
import { RegistrarComponent } from './page/registrar/registrar.component';
const routes: Routes = [
 
  {
    path:'singup',
    component:SignupComponent,
  },
  {
    path:'reserva',
    component:ReservaComponent,
  },
  {
    path:'inmueble',
    component:InmuebleComponent,
  },
  {
    path:'user',
    component:UsuariosComponent,
  },
  {
    path:'crearinmobili',
    component:RegistrarComponent,
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
