import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCharacters() {
    console.log("characters got")
  }
  
  getCharacter(id:number) {
    console.log(id);
  }

  updateCharacter() {
    console.log("edit element");
  }
  
  deleteCharacter() {
    console.log("delete element");
  }

}
