import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RequestsService } from 'src/app/service/requests.service';

@Component({
  selector: 'app-edit-request',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink,CommonModule],
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {


  editRequestForm: FormGroup;
  requestId: string;
  request: any;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private requestsService: RequestsService,
    private router: Router
  ) {
    this.loading = true;
    this.editRequestForm = this.fb.group({
      requestedDate: ['', Validators.required],
      requestedAmount: ['', Validators.required],
      requestedPrograms: ['', Validators.required],
      observations: [''],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.requestId = params.get('requestId');
      this.loadRequestData();
    });
  }

  loadRequestData() {
    this.requestsService.getDataById(this.requestId).subscribe(
      (response) => {
        this.request = response;
        this.editRequestForm.patchValue({
          requestedDate: this.request.solicitado_para_el,
          requestedAmount: this.request.equipos_solicitados,
          requestedPrograms: this.request.programas_solicitados,
          observations: this.request.observaciones
        });
        this.loading = false;
      },
      (error) => {
        this.router.navigate(['/list-request']);
      }
    );
  }

  enviar() {
    this.requestsService.updateData(this.requestId, this.editRequestForm.value).subscribe(
      (response) => {
        this.router.navigate(['/list-request']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  tieneErrores(control: string, error: string) {
    return this.editRequestForm.get(control)?.hasError(error) && this.editRequestForm.get(control)?.touched
  }
}
