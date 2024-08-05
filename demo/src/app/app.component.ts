import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CouponComponent } from './coupon/coupon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CouponComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
