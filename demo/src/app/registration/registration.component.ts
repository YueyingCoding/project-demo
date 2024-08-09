import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
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
  form: FormGroup;

  constructor(private http: HttpClient) {
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.getFormFields().subscribe();
  }

  getFormFields(): any {
    return this.http.get('http://localhost:8000/api/form-fields/').pipe(
      tap(fields => this.createForm(fields))
    );
  }

  createForm(fields: any) {
    fields.forEach((field: any) => {
      this.form.addControl(field.name, new FormControl(''));
    });
  }

  onSubmit() {
    const formData = this.form.value;  // This should log the correct form data
    console.log('Form Data:', formData); // Check the browser console to verify
    this.http.post('http://localhost:8000/api/form-submit/', formData).subscribe({
      next: response => {
        console.log('Success:', response);
      },
      error: error => {
        console.error('Error:', error);
      }
    });
  }
}
