import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
})
export class ButtonComponent {
  label = input<string>('Click me');
  type = input<'button' | 'submit' | 'reset' | 'custom'>('button');
  disabled = input<boolean>(false);
  textcolor = input<string>('');
  bgcolor = input<string>('');
  borderColor = input<string>('');
  borderRadius  = input<string>('');
  icon = input<string>('');
  iconLink = input<string>('');
  iconPosition = input<'left' | 'right'>('left');
  width = input<string>('');
  buttonClick = output<void>();
}
