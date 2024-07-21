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
      strings: [`Hi there! ${this.hand},`, "I'm,", `Lukhanyo Matshebelele ${this.smile}`],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }

  public laptop: string = '&#128187;'
  private hand: string = '&#128075;'
  private smile:string = '&#128526;'

}
