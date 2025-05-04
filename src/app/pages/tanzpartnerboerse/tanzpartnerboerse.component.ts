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
        // Weitere Anfragen hier...
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
