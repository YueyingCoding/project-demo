import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getPublicCoupons(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/public-coupons/`);
  }
}
