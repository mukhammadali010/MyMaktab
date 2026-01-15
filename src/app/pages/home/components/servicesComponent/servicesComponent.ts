import { Component } from '@angular/core';
import { ServiceCardComponent } from '../../../../shared/generics/service-card/service-card';

@Component({
  selector: 'app-services-component',
  templateUrl: './servicesComponent.html',
  imports: [ServiceCardComponent],
})
export class ServicesComponent {}
