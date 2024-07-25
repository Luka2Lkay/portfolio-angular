import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private _router: Router) {}

  activeSkills: boolean = false;
  activeHome: boolean = true;

  home(): void {
    window.scrollTo(0, 0);
    this.activeSkills = false;
    this.activeHome = true;
  }

  skills(): void {
    window.scrollTo(0, 600);
    this.activeSkills = true;
    this.activeHome = false;
  }
}
