import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// MODULES
import { RoutingModule } from './modules/routing.module';
import { MaterialModule } from './modules/material.module';

// COMPONENTS
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VideoThumbnailComponent } from './components/dashboard/video-thumbnail/video-thumbnail.component';
import { VideoSearchComponent } from './components/dashboard/video-search/video-search.component';

// SERVICES
import { VideoService } from './services/video.service';

// PIPES
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { TimeFromNowPipe } from './pipes/time-from-now.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VideoDetailsComponent,
    DashboardComponent,
    VideoSearchComponent,
    VideoThumbnailComponent,
    SanitizeHtmlPipe,
    TimeFromNowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
