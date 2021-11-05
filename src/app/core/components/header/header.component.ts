import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showLoginButton: boolean;
  showRegisterButton: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('registration')) {
          this.showLoginButton = true;
          this.showRegisterButton = false;
        }
        else if (event.url.includes('login')) {
          this.showLoginButton = false;
          this.showRegisterButton = true;
        }
      }
    });
  }

  ngOnInit(): void {
  }
}
