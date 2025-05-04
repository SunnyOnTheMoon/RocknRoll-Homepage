import { Component, Input } from '@angular/core';
import { TanzpartnerRequest } from '../../models/tanzpartner-request';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tanzpartner-card-component',
  imports: [
    CommonModule 
  ],
  templateUrl: './tanzpartner-card-component.component.html',
  styleUrl: './tanzpartner-card-component.component.scss'
})
export class TanzpartnerCardComponentComponent {

 @Input() partnerRequest!: TanzpartnerRequest;
}
