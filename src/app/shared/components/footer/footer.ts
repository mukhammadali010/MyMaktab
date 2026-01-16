import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  bgColor = input<boolean>(false);
}
