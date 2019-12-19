import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-video-selected',
  templateUrl: './video-selected.component.html',
  styleUrls: ['./video-selected.component.css']
})
export class VideoSelectedComponent implements OnInit {
@Input() resultSelected: any[]
@Input() urlFinal: string

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    console.log("selected");
    
    console.log(this.resultSelected);
    
  }

}
