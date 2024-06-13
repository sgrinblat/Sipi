import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarComponent } from 'src/app/reutilizables/toolbar/toolbar.component';
import { RequestsService } from 'src/app/service/requests.service';
@Component({
  selector: 'app-list-request',
  standalone: true,
  imports: [CommonModule, RouterLink,ToolbarComponent],
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {
  data: any[] = [];

  constructor( private requestsService: RequestsService) { }


  ngOnInit(): void {
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
  if (confirm('¿Estás seguro de que deseas eliminar esta solicitud?')) {
    this.requestsService.deleteRequest(id).subscribe(
      () => {
       
        this.data = this.data.filter(item => item.id !== id);
        console.log(`Solicitud con ID: ${id} eliminada`);
      },
      (error) => {
        console.error('Error al eliminar la solicitud', error);
      }
    );
  }
}


}
