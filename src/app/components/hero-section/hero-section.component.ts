import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js'

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const typed = new Typed('.typing', {
      strings: ['Hi, there!', "I'm,", 'Lukhanyo Matshebelele'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }
}
