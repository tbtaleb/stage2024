import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../AA_services/client.service';
import { Client } from '../AA_classes/client';
import { AuthService } from '../AA_services/auth.service';

@Component({
  selector: 'app-signupf',
  templateUrl: './signupf.component.html',
  styleUrls: ['./signupf.component.css']
})
export class SignupfComponent {
  signupForm!: FormGroup;



  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.minLength(3), Validators.required]],
      companyName: ['', [Validators.minLength(3), Validators.required]],
      cin: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      nb: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(3), Validators.maxLength(8), Validators.required],],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const newClient: Client = {
        id: this.signupForm.value.cin,
        username: this.signupForm.value.username,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        companyName: this.signupForm.value.companyName,
        phoneNum: this.signupForm.value.nb,
      };

      this.clientService.addClient(newClient).subscribe(() => {
        console.log(newClient);
        this.authService.setAuthenticated(true);
        this.router.navigate(['/acceuil/home']);
      });
    }
  }
}
