import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  activeSkills: boolean = false;
  activeProjects: boolean = false;
  activeHome: boolean = true;

  isSvg = true;

  toggleE = false;

  toggle() {
    if (!this.toggleE) {
      this.toggleE = true;
    } else {
      this.toggleE = false;
    }
  }

  home(): void {
    window.scrollTo(0, 0);
    this.activeSkills = false;
    this.activeProjects = false;
    this.activeHome = true;
  }

  skills(): void {
    window.scrollTo(0, 600);
    this.activeSkills = true;
    this.activeHome = false;
    this.activeProjects = false;
  }

  projects(): void {
    window.scrollTo(0, 850);
    this.activeProjects = true;
    this.activeSkills = false;
    this.activeHome = false;
  }

  contactMe(): void {
    window.scrollTo(0, 1700);
    this.activeProjects = false;
    this.activeSkills = false;
    this.activeHome = false;
  }
}
