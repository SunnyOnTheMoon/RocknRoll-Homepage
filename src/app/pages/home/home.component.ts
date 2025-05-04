import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroContent } from '../../models/hero';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
    selector: 'app-home',
    imports: [
        CommonModule,
        HeroComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
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
