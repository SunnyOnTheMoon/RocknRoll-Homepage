import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideoPlayerComponent } from "../../components/video-player/video-player.component";

@Component({
    selector: 'app-auftritte',
    imports: [
    CommonModule,
    VideoPlayerComponent
],
    templateUrl: './auftritte.component.html',
    styleUrl: './auftritte.component.scss'
})
export class AuftritteComponent {

  public auftritt1 = {
    title: '04.11.2023: Der etwas andere Showtanzabend',
    description: `Nachdem die Teilnahme 2022 krankheitsbedingt abgesagt werden musste, war es nun endlich soweit: 
                  Der Mainzer Uni-Rock'n'Roll nahm an "Der etwas anderen Showtanzabend (DEAS)" in Kirchheimbolanden statt.
                  Zum ersten Mal betraten dabei zwei getrennte Formationen die Bühne: Zunächst trat der F-Kurs mit der neuen 
                  "Tick-Tock"-Choreo auf, nach der Pause dann der L-Kurs mit der Elvis-Choreo. Leider war die Beleuchtung so stark, 
                  dass die Identifizierung der einzelnen Paare nur dem geübten Auge möglich sein sollte. Viel Spaß dabei. ;-)`,
    videoId: 'uHAVIAKw4b8' 
  };

  public auftritt2 = {
    title: '02.11.2023: Rock\'n\'Roll Show',
    description: `Ein aufregender Auftritt beim Rock'n'Roll Turnier in Mainz! Es war ein tolles Event, bei dem wir alle unser Bestes gegeben haben.
                  Die Zuschauer waren begeistert und das Team hat einen großartigen Job gemacht. Schaut euch das Video an!`,
    videoId: '9uQ0mvQQ7pc'
  };

  // Weitere Auftritte können hier hinzugefügt werden

}
