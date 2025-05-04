import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TanzpartnerCardComponentComponent } from "../../components/tanzpartner-card-component/tanzpartner-card-component.component";
import { TanzpartnerRequest } from '../../models/tanzpartner-request';


@Component({
    selector: 'app-tanzpartnerboerse',
    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TanzpartnerCardComponentComponent
],
    templateUrl: './tanzpartnerboerse.component.html',
    styleUrl: './tanzpartnerboerse.component.scss'
})
export class TanzpartnerboerseComponent {

    form: FormGroup;
    today: string = new Date().toLocaleDateString('de-DE');

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            role: ['follower', Validators.required],
            lookingFor: ['leader', Validators.required],
            course: ['', Validators.required],
            description: ['', [Validators.required, Validators.minLength(10)]],
          });
    }

    onSubmit() {
        if (this.form.valid) {
          const entry: TanzpartnerRequest = {
            id: crypto.randomUUID(),
            name: this.form.value.name,
            role: this.form.value.role,
            kurs: this.form.value.course,
            searchingFor: this.form.value.lookingFor,
            description: this.form.value.description,
            date: new Date(),
          };
      
          this.partnerRequests.unshift(entry);
          this.filterRequests();                
          this.form.reset({                    
            role: 'follower',
            lookingFor: 'leader',
            course: '',
            description: '',
            name: '',
          });
        }
      }


      partnerRequests: TanzpartnerRequest[] = [
        {
          id: "1",
          name: 'Max Mustermann',
          role: 'Leader',
          kurs: 'A-Kurs Mainz',
          searchingFor: 'Follower',
          description: 'Ich bin ein erfahrener Tänzer und suche eine/n Partner/in.',
          date: new Date(),
        },
        {
          id: "2",
          name: 'Anna Beispiel',
          role: 'Follower',
          kurs: 'Kurs Wiesbaden',
          searchingFor: 'Leader',
          description: 'Ich bin Anfängerin und suche einen Leader.',
          date: new Date(),
        },
        {
          id: "3",
          name: 'Lukas Sommer',
          role: 'Leader',
          kurs: 'F-Kurs Mainz',
          searchingFor: 'Follower',
          description: 'Ich tanze seit 2 Jahren und suche eine fortgeschrittene Followerin.',
          date: new Date(),
        },
        {
          id: "4",
          name: 'Sophie Winter',
          role: 'Follower',
          kurs: 'L-Kurs Mainz',
          searchingFor: 'Leader',
          description: 'Ich möchte meine Technik verbessern und suche jemanden mit Erfahrung.',
          date: new Date(),
        },
        {
          id: "5",
          name: 'Jan Klein',
          role: 'Leader',
          kurs: 'Kurs Wiesbaden',
          searchingFor: 'Follower',
          description: 'Ich bin neu im Rock’n’Roll und freue mich auf gemeinsame Fortschritte.',
          date: new Date(),
        },
        {
          id: "6",
          name: 'Maria Schulz',
          role: 'Follower',
          kurs: 'A-Kurs Mainz',
          searchingFor: 'Leader',
          description: 'Suche einen netten Leader, der regelmäßig mit mir tanzen möchte.',
          date: new Date(),
        },
        {
          id: "7",
          name: 'Tom Becker',
          role: 'Leader',
          kurs: 'L-Kurs Mainz',
          searchingFor: 'Follower',
          description: 'Ich trainiere regelmäßig und würde gern an einer Showgruppe teilnehmen.',
          date: new Date(),
        },
        {
          id: "8",
          name: 'Lisa König',
          role: 'Follower',
          kurs: 'F-Kurs Mainz',
          searchingFor: 'Leader',
          description: 'Ich tanze schon länger, würde aber gern neue Figuren lernen.',
          date: new Date(),
        },
        {
          id: "9",
          name: 'Ben Fischer',
          role: 'Leader',
          kurs: 'A-Kurs Mainz',
          searchingFor: 'Follower',
          description: 'Ich suche eine Tanzpartnerin mit Spaß an Bewegung und Musik.',
          date: new Date(),
        },
        {
          id: "10",
          name: 'Nina Hartmann',
          role: 'Follower',
          kurs: 'Kurs Wiesbaden',
          searchingFor: 'Leader',
          description: 'Ich würde gern regelmäßig trainieren und meine Technik verbessern.',
          date: new Date(),
        },
        {
          id: "11",
          name: 'Felix Neumann',
          role: 'Leader',
          kurs: 'F-Kurs Mainz',
          searchingFor: 'Beides',
          description: 'Ich bin offen für Leader oder Follower – Hauptsache es passt tänzerisch und menschlich!',
          date: new Date(),
        }  
      ];
      
    
      filteredRequests = [...this.partnerRequests];  // Anfangs alle Anfragen zeigen
    
      // Filterkriterien
      selectedCourse = '';
      selectedRole = '';
    
      filterRequests() {
        this.filteredRequests = this.partnerRequests.filter(request => {
          const matchesCourse = this.selectedCourse ? request.kurs.includes(this.selectedCourse) : true;
          const matchesRole = this.selectedRole ? request.searchingFor === this.selectedRole : true;
          return matchesCourse && matchesRole;
        });
      }
}
