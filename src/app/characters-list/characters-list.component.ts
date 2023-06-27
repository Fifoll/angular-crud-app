import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterServiceService } from '../character-service.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters : Character[] = [];

  loader : boolean = false;

  constructor(private service : CharacterServiceService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.service.getcharactersData().subscribe({
      next: (data: Character[]) => {
        this.loader = true;
        this.characters = [];
        data.forEach((element) => {
          this.characters.push(element);
        })
      },
      error: () => {
        throw new Error("Can't download data, please check api configuration!")
      },
      complete: () => this.loader = false
    })
  }
  
  getCharacter(id:number) {
    console.log(id);
  }

  updateCharacter() {
    console.log("edit element");
  }
  
  deleteCharacter(id: string | undefined) {
    if (typeof id === 'string' && id !== undefined) {
      this.service.deleteCharacter(id).subscribe({
        complete: () => this.getCharacters(),
        error: () => {throw new Error("Nie udało się usąń bohatera")}
      });
    }
  }
  

}
