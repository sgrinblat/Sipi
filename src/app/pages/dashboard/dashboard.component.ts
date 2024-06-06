import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/service/conexion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private conexionService: ConexionService) { }

  ngOnInit() {
  }

  chequearSesion() {
    if(this.conexionService.sesionIniciada()) {
      return true;
    } else {
      return false;
    }
  }

}
