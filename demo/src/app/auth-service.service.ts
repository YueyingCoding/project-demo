import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  isLoggedIn() {
    // return !!localStorage.getItem('token'); // Replace with actual logic to check if user is logged in
    return false;
  }
  login(token: string): void {
    localStorage.setItem('token', token); // Save token on login
  }

  logout(): void {
    localStorage.removeItem('token'); // Remove token on logout
  }
}
