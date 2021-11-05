import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      password: new FormControl(''),
      username: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
