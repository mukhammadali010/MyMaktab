import { Component, input } from '@angular/core';
import { Application } from '../../../pages/cabinet/pages/applications/applications.model';

@Component({
  selector: 'app-cabinet-card',
  standalone: true,
  templateUrl: './cabinet-card.html',
})
export class CabinetCard {
  data = input<Application>();
}
