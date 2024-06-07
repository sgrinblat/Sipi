import { Component, OnInit } from '@angular/core';
import {GetRequest} from '../../service/conexion.service'
@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {
  data: any[] = [];

  constructor( private getRequest: GetRequest) { }

  ngOnInit(): void {
    this.getRequest.getData().subscribe(
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
