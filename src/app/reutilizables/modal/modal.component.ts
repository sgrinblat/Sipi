import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormNewRequestComponent } from 'src/app/pages/components/form-new-request/form-new-request.component';
import { RequestsService } from '../../service/requests.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormNewRequestComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() isVisible = false;
  @Output() closeModal = new EventEmitter<void>();
  @ViewChild(FormNewRequestComponent) childFormComponent: FormNewRequestComponent;

  constructor(private requestsService: RequestsService) { }
  data: any[] = [];

  private createRequest(request: Object) {
    this.requestsService.createRequest(request).subscribe(
      (response) => {
        this.data = response;
        Swal.fire({
          title: "Intento exitoso",
          text: `${response.message}`,
          icon: "success"
        });

      },
      (error) => {
        Swal.fire({
          title: "Intentelo nuevamente",
          text: `Tuvimos problemas al procesar su solicitud`,
          icon: "error"
        });
        console.log(error)
      }
    )
  }

  onClose() {
    this.childFormComponent.resetForm();
    this.isVisible = false;
    this.closeModal.emit();
  }

  onSubmit() {
    const formValue = this.childFormComponent.submitForm();
    this.createRequest(formValue)
    if (formValue) {
      this.onClose()
    }
  }


}
