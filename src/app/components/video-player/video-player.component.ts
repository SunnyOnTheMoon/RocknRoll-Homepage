import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent {
  @Input() title: string = '';
  @Input() description: string = '';  
  @Input() videoId: string = '';

  videoUrl: SafeResourceUrl = ''; 

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    // Sanitizing the YouTube URL whenever the videoId changes
    if (this.videoId) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${this.videoId}`
      );
    }
  }
}