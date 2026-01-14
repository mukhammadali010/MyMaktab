import { Component } from "@angular/core";
import { AccordionModule } from 'primeng/accordion';
import { FaqItem } from "./faq.model";

@Component({
    selector: "app-faq",
    templateUrl: "./faq.html",
    imports:[AccordionModule],
})
export class Faq { 


faqList: FaqItem[] = [
  {
    id: '0',
    question: 'Qayta tayyorlash nima?',
    answer: 'Xodimlarni qayta tayyorlash yangi lavozimga tayinlash yoki mutaxassislikning malaka tasnifiga muvofiq keyinchalik professional faoliyatning yangi turini bajarish maqsadida yangi kasbiy bilim, ko‘nikma va malakalarni o‘zlashtirishga yo‘naltirish.'
  },
  {
    id: '1',
    question: 'Qayta tayyorlash kurslarini qaysi nizom yoki buyruqlar tartibiga solib turadi?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  },
  {
    id: '2',
    question: 'Qayta tayyorlash kurslari qanday shaklda tashkil etiladi?',
    answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.'
  },
  {
    id: '3',
    question: 'Qayta tayyorlash kurslari qancha vaqt davom etadi?',
    answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.'
  }
];
}
