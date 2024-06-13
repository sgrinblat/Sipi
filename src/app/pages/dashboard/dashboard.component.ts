import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/breadcrumb.service';
import { ConexionService } from 'src/app/service/conexion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private conexionService: ConexionService,
              private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs([
      { label: 'Dashboard', url: '/dashboard' },
    ]);
  }

  chequearSesion() {
    if(this.conexionService.sesionIniciada()) {
      return true;
    } else {
      return false;
    }
  }

}
