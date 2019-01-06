import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.pug',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent {
  video: any[];
  comments: any[];

  videoId: string;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) { 
    this.videoId = this.route.snapshot.paramMap.get('id');
    this.getVideo();
    this.getComments();
  }

  private getVideo(): void {
    this.videoService.getVideoByIds(this.videoId)
      .pipe(first())
      .subscribe(videos => this.video = videos[0]);
  }

  private getComments(): void {
    this.videoService.getVideoComments(this.videoId)
      .pipe(first())
      .subscribe(comments => this.comments = comments);
  }

  @HostListener('window:resize')
  onResize() {
    this.getVideo();
  }
}
