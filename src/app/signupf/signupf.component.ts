import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupf',
  templateUrl: './signupf.component.html',
  styleUrls: ['./signupf.component.css']
})
export class SignupfComponent {
  signupForm!: FormGroup;



  constructor(
    private fb: FormBuilder,
    // private userService: UserService,
    // private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.minLength(3), Validators.maxLength(8), Validators.required],
      ],
    });
  }

  // onSubmit(): void {
  //   if (this.signupForm.valid) {
  //     const newUser: User = {
  //       id: 0,
  //       username: this.signupForm.value.username,
  //       email: this.signupForm.value.email,
  //       password: this.signupForm.value.password,
  //       isAdmin: false,
  //       isMember: true,
  //       formation: []
  //     };

  //     this.userService.addUser(newUser).subscribe(() => {
  //       this.authService.setAuthenticated(true);
  //       this.router.navigate(['/home']);
  //     });
  //   }
  // }
}
