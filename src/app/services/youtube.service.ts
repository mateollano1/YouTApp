import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URLSearchParams } from 'url';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  getVideos(searchWord: string) {

    let params = new HttpParams().
      set('part', 'snippet').
      set('maxResults', '6').
      set('key', 'AIzaSyBAI0NC5rorx8iNrJIsaNsL2c-ngKQ_93U').
      set('q', searchWord)
    console.log(params.toString())
    return this.http.get("https://www.googleapis.com/youtube/v3/search", { params }).pipe(map((res: any) => {
      return res['items']
    }))
  }
}
