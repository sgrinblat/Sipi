import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ConexionService } from 'src/app/service/conexion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private conexionService: ConexionService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log("hola");

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.conexionService.iniciarSesionApi(email, password).subscribe(
        response => {
          console.log('Login correcto', response);
          Swal.fire({
            title: "Sesión iniciada",
            text: `Bienvenid@ ${response.user_data.fullname}`,
            icon: "success"
          });
        },
        error => {
          console.error('Login incorrecto', error);
          Swal.fire({
            title: "Error",
            text: `Hubo un problema!`,
            icon: "error"
          });
        }
      );
    }
  }
}
