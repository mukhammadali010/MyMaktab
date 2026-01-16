import { Component } from '@angular/core';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-cabinet',
  imports: [Sidebar, RouterOutlet, Navbar, Footer],
  templateUrl: './cabinet.html',
})
export class CabinetPage {}
