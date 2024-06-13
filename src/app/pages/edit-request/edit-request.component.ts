import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RequestsService } from 'src/app/service/requests.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-request',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink, CommonModule],
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
    Swal.fire({
      title: "Editar solicitud",
      text: "¿Estás seguro de que desea editar esta solicitud?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#adb5bd",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, editar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.requestsService.updateData(this.requestId, this.editRequestForm.value).subscribe(
          (response) => {
            Swal.fire({
              title: "Solicitud editada",
              text: "Su solicitud fue editada correctamente",
              icon: "success",
              showCancelButton: false,
              confirmButtonColor: "#198754",
              confirmButtonText: "Ok",
              allowOutsideClick: false,
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/list-request']);
              }
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

  tieneErrores(control: string, error: string) {
    return this.editRequestForm.get(control)?.hasError(error) && this.editRequestForm.get(control)?.touched
  }
}
