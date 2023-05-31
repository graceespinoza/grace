import { Component } from '@angular/core';
import { Usuarios } from 'src/app/Model/Usuarios';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
@Component({
  selector: 'app-listado-asesor',
  templateUrl: './listado-asesor.component.html',
  styleUrls: ['./listado-asesor.component.css']
})
export class ListadoAsesorComponent {

  pokemonSelect?:any;
  inmubsd!: FormGroup;
  usuarios: Usuarios[] = [];

  poke: any;
  userForm = new FormGroup({
  
    nombre: new FormControl('', [Validators.required]),
    celular: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required]),

  });


  nombre: string=""; 
  celular: number=0; 
  cedula: number=0; 
  direccion: string=""; 
  email: string="";
  rol : string="";
  contrasena:string="";
  constructor(
    public fb: FormBuilder,
    public userSer: UsuarioServiceService,
    private router: Router,
  ) { }


  async ngOnInit(): Promise<void> {   this.inmubsd = this.fb.group({
    nombre: ['', Validators.required],
    celular: ['', Validators.required],
    email: ['', Validators.required],
    contrasena: ['', Validators.required],     
  });
 
  await this.userSer.obtener().subscribe(resp => {
    this.poke = resp;

    console.log(resp);
  },
    error => {
      console.error(error);
    }

  )
}

  guardar(event: Event): void {
    event.preventDefault();
      const user = this.userForm.value;

        this.userSer.save(this.userForm.value).subscribe(resp => {
          this.userForm.reset();
          console.log(resp);
          this.poke.push(resp);

          debugger
      
      
        },
        error => {
          console.error(error)
        });
  }
        update(usuar: any) {
          this.inmubsd.patchValue({
            nombre: usuar.nombre,
            celular: usuar.celular,
            email: usuar.email,
            contrasena: usuar.contrasena
      
          })
          this.pokemonSelect = usuar;
          console.log("pokemonSelect", this.pokemonSelect);
      
        }
        delete(usuar: Usuarios) {
          console.log(usuar         )
          this.userSer.delete(usuar.codigo).subscribe(resp => {
            console.log(resp)
            if (resp === true) {
              this.poke.pop(usuar)
            }
          })
        }
}
  
 
