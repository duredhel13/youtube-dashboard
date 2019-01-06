import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.pug',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  videos = [];

  options = {
    order: 'relevance',
    q: '',
    maxResults: 8
  };

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    this.videoService.searchVideos(this.options)
      .pipe(first())
      .subscribe(videos => this.videos = videos.slice());
  }

  loadVideos(q): void {
    const isTopResults = !q;
    this.options.q = q;
    this.options.maxResults = isTopResults ? 8 : 25;

    if (isTopResults) {
      this.options.order = 'relevance';
    }
    
    this.getVideos();
  }
}
