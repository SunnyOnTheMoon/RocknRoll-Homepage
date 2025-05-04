import { Component, Input } from '@angular/core';
import { FAQ } from '../../models/faq';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [
    CommonModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  @Input() faqs!: FAQ[];

  toggleAnswer(faq: FAQ) {
    faq.isOpen = !faq.isOpen;
  }
}
