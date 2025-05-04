import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaqComponent } from "../../components/faq/faq.component";
import { FAQ } from '../../models/faq';
import { HeroComponent } from "../../components/hero/hero.component";
import { HeroContent } from '../../models/hero';

@Component({
    selector: 'app-wiesbaden',
    imports: [
    CommonModule,
    FaqComponent,
    HeroComponent
],
    templateUrl: './wiesbaden.component.html',
    styleUrl: './wiesbaden.component.scss'
})
export class WiesbadenComponent {
    faqs: FAQ[] = [
            {
              question: 'Wann und wo finden die Kurse statt?',
              answer: 'Unsere Kurse finden in Mainz statt, und die genaue Location wird vor Kursbeginn bekannt gegeben.',
              isOpen: false,
            },
            {
              question: 'Finden die Kurse auch in der vorlesungsfreien Zeit statt?',
              answer: 'Ja, die Kurse finden auch in der vorlesungsfreien Zeit statt, abhängig von der Teilnahme.',
              isOpen: false,
            }
          ];

    heroData: HeroContent = {
            header: 'Unsere Wiesbadener Kurse',
            paragraphs: [
              'Seit dem Wintersemester 2018/2019 bieten wir auch Rock\'n\'Roll-Kurse an der Hochschule Rhein-Main in Wiesbaden an. Diese Kurse finden zur Zeit immer mittwochs in Wiesbaden-Biebrich statt und sind anmelde- und kostenpflichtig. Zur Anmeldung geht es hier.',
              'Alle weiteren Infos zu unseren Kursen an der Hochschule RheinMain findet ihr unten auf dieser Seite. Bei konkreten Fragen schreibt uns einfach eine E-Mail.'
            ],
            picture: 'https://mainzer-uni-rocknroll.weebly.com/uploads/1/2/6/3/126319697/editor/hochschule-grundschritt.jpg?1565521250'
          };
}
