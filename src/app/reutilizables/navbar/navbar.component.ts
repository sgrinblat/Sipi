import { Component, OnInit, Renderer2, ViewChild, ElementRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ConexionService } from 'src/app/service/conexion.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private conexionService: ConexionService, private route: Router, private cdr: ChangeDetectorRef){}

  chequearSesion() {
    if(this.conexionService.sesionIniciada()) {
      return true;
    } else {
      return false;
    }
  }

  desloguearse() {
    this.conexionService.cerrarSesion();
    Swal.fire('Sesión cerrada',`Esperamos verte pronto!`, `info`);
    this.cdr.detectChanges();
    this.route.navigate(['']);
  }

}

