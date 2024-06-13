import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarComponent } from 'src/app/reutilizables/toolbar/toolbar.component';
import { BreadcrumbService } from 'src/app/service/breadcrumb.service';
import { RequestsService } from 'src/app/service/requests.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-request',
  standalone: true,
  imports: [CommonModule, RouterLink, ToolbarComponent],
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {
  data: any[] = [];

  constructor(private requestsService: RequestsService,
    private breadcrumbService: BreadcrumbService
  ) { }


  ngOnInit(): void {
    this.breadcrumbService.setBreadcrumbs([
      { label: 'Dashboard', url: '/dashboard' },
      { label: 'Request', url: '/list-request' },
    ]);

    this.requestsService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {

        console.error('Error fetching data', error);
      }
    );
  }


  eliminar(id: string): void {

    Swal.fire({
      title: "Eliminar solicitud",
      text: "¿Estás seguro de que deseas eliminar esta solicitud?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#adb5bd", 
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.requestsService.deleteRequest(id).subscribe(

          (response) => {
            this.data = this.data.filter(item => item.id !== id);
            Swal.fire({
              title: "Solicitud eliminada",
              text: `${response.message}`,
              icon: "success"
            });

          },
         

          (error) => {
            Swal.fire({
              title: "Error Solicitud",
              text: `${"Error, Tuvimos problemas al procesar su solicitu"}`,
              icon: "error"
            })
          }
        );
      }
    });


  
  }
}



