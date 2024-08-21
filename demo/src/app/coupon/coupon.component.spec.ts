import { TestBed } from '@angular/core/testing';
import { CouponComponent } from './coupon.component';
import { CouponService } from '../coupon.service';
import { of } from 'rxjs';

describe('CouponComponent', () => {
  let component: CouponComponent;
  let fixture: any;
  let couponServiceStub: Partial<CouponService>;

  beforeEach(async () => {
    // Create a stub for CouponService
    couponServiceStub = {
      getPublicCoupons: jasmine.createSpy('getPublicCoupons').and.returnValue(of([{ id: 1, title: 'Test Coupon' }]))
    };

    await TestBed.configureTestingModule({
      imports: [CouponComponent],  // Use the standalone component directly
      providers: [{ provide: CouponService, useValue: couponServiceStub }] // Provide the service stub
    }).compileComponents();

    fixture = TestBed.createComponent(CouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Trigger ngOnInit lifecycle
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and store public coupons on init', () => {
    expect(couponServiceStub.getPublicCoupons).toHaveBeenCalled();
    expect(component.publicCoupons.length).toBe(1);
    expect(component.publicCoupons[0].title).toBe('Test Coupon');
  });
});
