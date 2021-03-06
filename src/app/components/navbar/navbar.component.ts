import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Output() wordToSearch: EventEmitter <string>
  constructor( ) {
    this.wordToSearch = new EventEmitter()
  }
  ngOnInit() {
  }
  search(word: string){
    this.wordToSearch.emit(word)
  }
}