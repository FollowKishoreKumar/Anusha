import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AppConstants } from './app.constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgFor, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  author = AppConstants.ANUSHA;
  menu = AppConstants.MENU;

  constructor(private router: Router) {}

  navigateToSubMenu(subMenuItem: string) {
    // Logic to determine the route based on subMenuItem
    const route = `/some-route/${subMenuItem}`;
    this.router.navigate([route]);
  }

  ngOnInit() {}

  goTo(social: string) {
    switch (social) {
      case 'GPAY': {
        window.open(
          `tez://upi/pay?pa=anbuselvisadasivam@okhdfcbank&pn=+91 9790002151&tn=Test UPI&am=20&cu=INR&mc=1234&tr=01234`
        );
        break;
      }
      case 'WHATSAPP': {
        window.open(
          `https://wa.me/+919841052103?text=Hi Anusha, I want to know more about your classes`
        );
        break;
      }
      case 'TEL': {
        window.open('tel:+919841052103');
        break;
      }
    }
  }
}
