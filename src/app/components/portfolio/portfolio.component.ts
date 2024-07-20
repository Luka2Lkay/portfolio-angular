import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NavbarComponent, ProjectsComponent, HeroSectionComponent, SkillsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {

}
