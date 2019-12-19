import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';


@Component({
  selector: 'app-videos-found',
  templateUrl: './videos-found.component.html',
  styleUrls: ['./videos-found.component.css']
})
export class VideosFoundComponent implements OnInit {

  results: any[]
  imgs: string[] = []
  imgsCarousel: string[] = []

  resultSelected: any = ""
  urlVideo: string = "https://www.youtube.com/embed/"
  urlFinal: string
  md: boolean = true
  size: number
  carouselView: boolean = false
  carouselId: number = 0
  initialMessage: boolean = true
  constructor(private youtubeService: YoutubeService) {
  }

  ngOnInit() {
    this.onResize()
  }

  /**
   * Search the word in the youtube api
   * @param word 
   */
  search(word: any) {
    this.youtubeService.getVideos(word).subscribe(data => {
      this.results = data
      this.initialMessage = false
      let idVideo = this.results[0]['id']['videoId']
      this.urlFinal = `${this.urlVideo}${idVideo}`
      this.resultSelected = this.results[0]
      this.setCarousel()
      this.onResize()
    })
  }

  /**
   * Set the carousel to movil view
   */
  setCarousel() {
    this.imgs = []
    for (let index = 0; index < this.results.length; index++) {
      const element = this.results[index]['snippet']['thumbnails']['high']['url'];
      this.imgs.push(element)
    }
  }

  /**
   * Configuration to use the boton left in carousel
   */
  leftCarousel() {
    this.carouselId = this.carouselId + 1
    if (this.carouselId == 6) {
      this.carouselId = 0
    }
    this.imgsCarousel = []
    let cont = this.carouselId
    for (let index = 0; index < 1; index++) {
      const element = this.imgs[cont];
      this.imgsCarousel.push(element)
      if ((cont + 1) == 6) {
        cont = -1
      }
      cont = cont + 1
    }
  }

  /**
   * Configuration to use the boton right in carousel
   */
  rightCarousel() {
    this.carouselId = this.carouselId - 1
    if (this.carouselId <= 0) {
      this.carouselId = 5
    }
    this.imgsCarousel = []
    let cont = this.carouselId

    for (let index = 0; index < 1; index++) {

      const element = this.imgs[cont];
      this.imgsCarousel.push(element)
      if ((cont + 1) == 6) {
        cont = -1
      }
      cont = cont + 1
    }
  }

  /**
   * Update and shoe info about a video selected
   * @param i 
   */
  showVideo(i: number) {
    let idVideo = this.results[i]['id']['videoId']
    this.urlFinal = `${this.urlVideo}${idVideo}`
    this.resultSelected = this.results[i]
  }

  /**
   * Update and shoe info about a video selected in movil view
   * @param i 
   */
  showVideoCarousel(i: number) {
    console.log(this.imgsCarousel[i]);
    let imgUrl = this.imgsCarousel[i]
    let idVideo = "";
    console.log(this.results);
    this.urlFinal =""
    this.resultSelected = ""
    for (let index = 0; index < this.results.length; index++) {
      const element = this.results[index]['snippet']['thumbnails']['high']['url'];
      console.log(element);

      if (element == imgUrl) {
        console.log("entre");
        idVideo = this.results[index]['id']['videoId']
        console.log(idVideo);

        this.urlFinal = `${this.urlVideo}${idVideo}`
        console.log(this.urlFinal);

        this.resultSelected = this.results[index]
        console.log(this.resultSelected);
        
      }
    }
  }

  /**
   * Verify the size of the window and lets be responsive
   * @param event 
   */
  onResize() {
    this.size = window.innerWidth;
    if (this.size < 768) {
      this.carouselView = true
      this.rightCarousel()
    } else {
      this.carouselView = false
    }
  }
}

