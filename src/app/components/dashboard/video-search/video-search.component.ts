import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { VideoService } from '../../../services/video.service';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.pug',
  styleUrls: ['./video-search.component.scss']
})
export class VideoSearchComponent implements OnInit {
  @Output() enterPressed: EventEmitter<string> = new EventEmitter<string>();

  videos: Observable<any[]>;
  private searchTerms = new Subject<string>();

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videos = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        return term ? this.videoService.lookupVideos(term) : of([]);
      }),
    );
  }

  // Push a search term into the observable stream.
  search($event: KeyboardEvent, term: string): void {
    if ($event.key === 'Enter') {
      this.enterPressed.emit(term);
      this.searchTerms.next('');
    } else {
      this.searchTerms.next(term);
    }
  }
}
