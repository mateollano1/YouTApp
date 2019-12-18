import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  results: any []
  resultSelected: any = ""
  urlVideo: string  = "https://www.youtube.com/embed/"
  urlFinal: string
  constructor(private youtubeService: YoutubeService) {
   
  }

  ngOnInit() {
    console.log("data");
    this.youtubeService.getVideos("").subscribe(data =>{
      console.log(data);
      this.results = data
      let idVideo = this.results[0]['id']['videoId']
      this.urlFinal = `${this.urlVideo}${idVideo}`
      this.resultSelected = this.results[0]
    })

  }
      showVideo(i: number){
        let idVideo = this.results[i]['id']['videoId']
        this.urlFinal = `${this.urlVideo}${idVideo}`
        this.resultSelected = this.results[i]

        console.log(this.urlVideo);
        
      }

}
