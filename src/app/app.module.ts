import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideosFoundComponent } from './components/videos-found/videos-found.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { VideoSelectedComponent } from './components/video-selected/video-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideosFoundComponent,
    SafeUrlPipe,
    VideoSelectedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
