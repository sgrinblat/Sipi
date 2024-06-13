import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
private breadcrumbSubject = new BehaviorSubject<Array<{ label: string, url: string }>>([]);
breadcrumbs$ = this.breadcrumbSubject.asObservable();

setBreadcrumbs(breadcrumbs: Array<{ label: string, url: string }>) {
  this.breadcrumbSubject.next(breadcrumbs);
}
  
}
