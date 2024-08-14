import { Component } from '@angular/core';
import { CouponComponent } from '../coupon/coupon.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CouponComponent, RegistrationComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
