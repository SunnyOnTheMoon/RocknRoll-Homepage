import { Routes } from '@angular/router';
import { AuftritteComponent } from './pages/auftritte/auftritte.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpressumDatenschutzComponent } from './pages/impressum-datenschutz/impressum-datenschutz.component';
import { MainzComponent } from './pages/mainz/mainz.component';
import { MusikListeComponent } from './pages/musik-liste/musik-liste.component';
import { TanzpartnerboerseComponent } from './pages/tanzpartnerboerse/tanzpartnerboerse.component';
import { WiesbadenComponent } from './pages/wiesbaden/wiesbaden.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'mainz', component: MainzComponent },
    { path: 'wiesbaden', component: WiesbadenComponent },
    { path: 'auftritte', component: AuftritteComponent },
    { path: 'musik-liste', component: MusikListeComponent },
    { path: 'tanzpartnerboerse', component: TanzpartnerboerseComponent },
    { path: 'impressum-datenschutz', component: ImpressumDatenschutzComponent },
    { path: '**', redirectTo: '' }
];
