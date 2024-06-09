import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/service/requests.service';
@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {
  data: any[] = [];

  constructor( private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.requestsService.getData().subscribe(
      (response) => {
        console.log(response);
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

}
