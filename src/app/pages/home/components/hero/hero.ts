import { Component, signal } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from "../../../../shared/components/button/button";
import { GenericCard } from "../../../../shared/generics/generic-card/generic-card";
@Component({
    selector:"app-hero",
    templateUrl:"./hero.html",
    imports: [ButtonComponent, ButtonModule, GenericCard]
})

export class Hero{
    schoolsCount = signal<string>('5451');
    studentCount = signal<string>('123 657');
    usersCount = signal<string>('56 981');
}