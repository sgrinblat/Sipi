import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RequestsService } from 'src/app/service/requests.service';
@Component({
  selector: 'app-list-request',
  standalone: true,
  imports: [CommonModule, RouterLink],
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

}
