import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  imports: [CommonModule],
  animations: [
    trigger('contentAnimation', [
      state('open', style({
        height: '*',
        opacity: 1,
        transform: 'translateX(0)' /* Default position */
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        transform: 'translateX(100%)' /* Move out of view to the right */
      })),
      transition('open <=> closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class RegistrationComponent {
  open: boolean = true;
  onToggle() {
    this.open = !this.open;
    console.log('Toggle state:', this.open); // Check the state in console
  }
}
