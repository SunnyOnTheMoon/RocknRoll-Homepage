import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-musik-liste',
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule
    ],
    templateUrl: './musik-liste.component.html',
    styleUrl: './musik-liste.component.scss'
})
export class MusikListeComponent {

  displayedColumns: string[] = [
    'song', 'interpret', 'language', 'bpm', 'year', 'genre', 'introLength', 'outroLength', 'continuousBeat'
  ];
  songsData = [
    {
      song: 'Rock Around the Clock',
      interpret: 'Bill Haley & His Comets',
      language: 'Englisch',
      bpm: 115,
      year: 1954,
      genre: 'Rockabilly',
      introLength: '8s',
      outroLength: '4s',
      continuousBeat: 'Ja',
    },
    {
      song: 'Jailhouse Rock',
      interpret: 'Elvis Presley',
      language: 'Englisch',
      bpm: 116,
      year: 1957,
      genre: 'Rockabilly',
      introLength: '6s',
      outroLength: '5s',
      continuousBeat: 'Ja',
    },
    {
      song: 'Hound Dog',
      interpret: 'Elvis Presley',
      language: 'Englisch',
      bpm: 140,
      year: 1956,
      genre: 'Rockabilly',
      introLength: '10s',
      outroLength: '6s',
      continuousBeat: 'Ja',
    },
    // Weitere Lieder hinzuzufügen
  ];

}
