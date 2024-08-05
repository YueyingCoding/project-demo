import { Component, OnInit } from '@angular/core';
import { CouponService } from '../coupon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coupon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.css'
})
export class CouponComponent implements OnInit {
  publicCoupons: any[] = [];

  constructor(private couponService: CouponService) {}

  ngOnInit(): void {
    this.couponService.getPublicCoupons().subscribe((data) => {
      this.publicCoupons = data;
      console.log(this.publicCoupons[0]);
    })
  }
}
