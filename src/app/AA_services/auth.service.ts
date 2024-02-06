import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_ID_KEY = 'user_id';
  constructor(private router: Router, private clientService: ClientService) { }

  login(username: string, password: string): void {
    this.clientService.getClientrByUsername(username).subscribe(
      (authenticatedUser) => {
        if (authenticatedUser && authenticatedUser.password === password) {
          localStorage.setItem(
            this.USER_ID_KEY,
            authenticatedUser.id.toString()
          );
          this.router.navigate(['/home']);
        } else {
          alert('User not found or incorrect password');
        }
      }
    );
  }

  logout(): void {
    localStorage.removeItem(this.USER_ID_KEY);
    this.router.navigate(['/loginpage']);
  }

  getCurrentUserId(): string | null {
    const storedUserId = localStorage.getItem(this.USER_ID_KEY);
    if (storedUserId) {
      return storedUserId;
    } else {
      return null;
    }
  }
}
