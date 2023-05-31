import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { SignupComponent } from './page/signup/signup.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { InmuebleComponent } from './page/inmueble/inmueble.component';
import { NavComponent } from './page/nav/nav.component';
import { RegistrarComponent } from './page/registrar/registrar.component';
import { UserComponent } from './principal/user/user.component';
import { AsesorComponent } from './page/asesor/asesor.component';
import { ListadoAsesorComponent } from './page/listado-asesor/listado-asesor.component';
import { ListadoComponent } from './listado/listado.component';
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
  {
    path:'principal',
    component: UserComponent,
  },
  {
    path:'asesor',
    component: AsesorComponent,
  },
  {
    path:'listado',
    component:ListadoAsesorComponent ,
  },
  {
    path:'list',
    component:ListadoComponent ,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
