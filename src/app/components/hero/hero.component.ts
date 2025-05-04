import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeroContent } from '../../models/hero';

@Component({
  selector: 'app-hero',
  imports: [
    CommonModule  
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() content!: HeroContent; 
}
