import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaqComponent } from "../../components/faq/faq.component";
import { FAQ } from '../../models/faq';
import { HeroComponent } from "../../components/hero/hero.component";
import { HeroContent } from '../../models/hero';

@Component({
    selector: 'app-mainz',
    imports: [
    CommonModule,
    FaqComponent,
    HeroComponent
],
    templateUrl: './mainz.component.html',
    styleUrl: './mainz.component.scss'
})
export class MainzComponent {
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
        },
        {
          question: 'Finden die Kurse auch an Feiertagen und Brückentagen statt?',
          answer: 'An Feiertagen und Brückentagen kann es zu Anpassungen kommen. Bitte informiere dich bei den Übungsleitenden.',
          isOpen: false,
        },
        {
          question: 'Brauche ich Vorerfahrung, um an den Kursen teilnehmen zu können?',
          answer: 'Nein, du kannst auch als Anfänger*in teilnehmen. Es gibt Kurse für alle Levels.',
          isOpen: false,
        },
        {
          question: 'Muss ich mich anmelden, bevor ich ins Training komme?',
          answer: 'Eine Anmeldung ist in der Regel nicht erforderlich. Du kannst einfach zum Training kommen.',
          isOpen: false,
        },
        {
          question: 'Ich studiere nicht an der Uni Mainz. Kann ich trotzdem am Training teilnehmen?',
          answer: 'Ja, auch Studierende anderer Hochschulen können teilnehmen.',
          isOpen: false,
        },
        {
          question: 'Ich kann in der ersten (zweiten, dritten) Stunde nicht kommen. Kann ich trotzdem am Kurs teilnehmen?',
          answer: 'Das ist kein Problem. Du kannst auch später in den Kurs einsteigen.',
          isOpen: false,
        },
        {
          question: 'Ich kann regelmäßig nicht pünktlich zu Kursbeginn kommen. Ist das ein Problem?',
          answer: 'Wir verstehen, dass es mal zu Verspätungen kommen kann. Bitte versuche, pünktlich zu sein, um den Unterricht nicht zu stören.',
          isOpen: false,
        },
        {
          question: 'Kann ich auch ohne Tanzpartner*in kommen?',
          answer: 'Ja, du kannst auch alleine kommen. Wir helfen dir, einen Partner zu finden.',
          isOpen: false,
        },
        {
          question: 'Was ziehe ich an?',
          answer: 'Trage bequeme Kleidung, in der du dich gut bewegen kannst. Sportkleidung und Hallenschuhe sind ideal.',
          isOpen: false,
        },
        {
          question: 'Gibt es noch weitere Möglichkeiten zu trainieren?',
          answer: 'Ja, wir bieten auch zusätzliche Trainings und Workshops an.',
          isOpen: false,
        },
        {
          question: 'Habt ihr Auftritte?',
          answer: 'Ja, wir organisieren regelmäßig Auftritte und Events. Weitere Infos gibt es im Kurs.',
          isOpen: false,
        },
        {
          question: 'Bietet ihr Workshops an?',
          answer: 'Ja, wir bieten Workshops an, die in verschiedenen Tanzrichtungen stattfinden.',
          isOpen: false,
        },
        {
          question: 'Habt ihr auch Leistungssport-Angebote?',
          answer: 'Ja, wir haben auch fortgeschrittene Kurse für Leistungssportler*innen.',
          isOpen: false,
        },
        {
          question: 'Macht ihr auch außerhalb der Trainingszeiten etwas zusammen?',
          answer: 'Ja, wir organisieren auch gemeinsame Events, wie Ausflüge und Tanzabende.',
          isOpen: false,
        },
        {
          question: 'Wie bleibe ich auf dem Laufenden?',
          answer: 'Folge uns auf unseren sozialen Medien oder melde dich für unseren Newsletter an.',
          isOpen: false,
        },
      ];

      heroData: HeroContent = {
        header: 'Herzlich Willkommen auf der Website des Mainzer Uni-Rock\'n\'Rolls!',
        paragraphs: [
          'Wir sind eine Sportgruppe des Allgemeinen Hochschulsports (AHS) der Johannes Gutenberg-Universität Mainz und stellen euch hier Informationen rund um den Rock\'n\'Roll-Tanz zur Verfügung.',
          'Du willst Bewegung auf Musik mit spektakulären Akrobatiken verbinden? Dann bist du bei uns genau richtig! Rock\'n\'Roll ist ein Tanz, der Ausdauer erfordert und sehr vielseitig ist.',
          'Dabei sieht unser Rock\'n\'Roll nicht mehr so aus, wie ihr es vielleicht aus Ku\'damm 56 kennt, sondern orientiert sich am heutigen Turnier-Rock\'n\'Roll. Turniertanz ist natürlich nicht unser Ziel, aber auch wir wollen ein vorzeigbares Niveau erreichen und dabei viel Spaß haben.'
        ],
        picture: 'https://mainzer-uni-rocknroll.weebly.com/uploads/1/2/6/3/126319697/editor/uni-emblem-quadratisch.jpg?1565304827'
      };
}