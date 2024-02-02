import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginf',
  templateUrl: './loginf.component.html',
  styleUrls: ['./loginf.component.css']
})
export class LoginfComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.minLength(3), Validators.required]],
      password: [
        '',
        [Validators.minLength(3), Validators.maxLength(8), Validators.required],
      ],
    });
  }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     const username = this.loginForm.value.username;
  //     const password = this.loginForm.value.password;

  //     this.authService.login(username, password);
  //   }
  // }
}
