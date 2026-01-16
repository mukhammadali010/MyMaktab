import { Component } from '@angular/core';
import { CabinetCard } from '../../../../shared/generics/cabinet-card/cabinet-card';
import { Application } from './applications.model';
import { ButtonComponent } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.html',
  imports: [CabinetCard, ButtonComponent],
})
export class ApplicationsPage {
  applications: Application[] = [
    {
      id: 1,
      status: 'created',
      statusLabel: 'Yaratildi',
      year: '2025/2026',
      student: 'Mo‘minova Iymona',
      number: '5698-9389-9688',
      category: 'Maktabdan-maktabga o‘tkazish',
      created: '06.01.2026 13:18',
    },
    {
      id: 2,
      status: 'accepted',
      statusLabel: 'Qabul qilindi',
      year: '2025/2026',
      student: 'Mo‘minova Iymona',
      number: '5698-9389-9688',
      category: 'Maktabdan-maktabga o‘tkazish',
      created: '06.01.2026 13:18',
    },
    {
      id: 3,
      status: 'accepted',
      statusLabel: 'Qabul qilindi',
      year: '2025/2026',
      student: 'Mo‘minova Iymona',
      number: '5698-9389-9688',
      category: 'Maktabdan-maktabga o‘tkazish',
      created: '06.01.2026 13:18',
    },
    {
      id: 4,
      status: 'accepted',
      statusLabel: 'Qabul qilindi',
      year: '2025/2026',
      student: 'Mo‘minova Iymona',
      number: '5698-9389-9688',
      category: 'Maktabdan-maktabga o‘tkazish',
      created: '06.01.2026 13:18',
    },
    {
      id: 5,
      status: 'accepted',
      statusLabel: 'Qabul qilindi',
      year: '2025/2026',
      student: 'Mo‘minova Iymona',
      number: '5698-9389-9688',
      category: 'Maktabdan-maktabga o‘tkazish',
      created: '06.01.2026 13:18',
    },
  ];
}
