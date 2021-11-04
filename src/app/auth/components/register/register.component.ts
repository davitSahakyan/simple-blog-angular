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
      login: new FormControl(''),
      name: new FormControl(''),
      surname: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
