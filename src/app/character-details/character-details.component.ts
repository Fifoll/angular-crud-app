import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CharacterServiceService } from '../character-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  character: Character = {
    _id: '',
    name: '',
    age: 0,
    colour: ''
  }

  characterForm!: FormGroup;
  loader: boolean = false;

  constructor(private fb: FormBuilder, private service: CharacterServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe(() => {
      this.getCharacter(this.route.snapshot.paramMap.get('id'));
    });

    this.characterForm = this.fb.group({
      name: [''],
      age: [],
      colour: ['']
    });
  }

  getCharacter(id: string | null) {
    this.loader = true;
    if (id != null) {
      this.service.getSingleCharacterData(id).subscribe({
        next: (data) => this.character = data,
        error: () => {
          throw new Error("can't download single character data!")
        },
        complete: () => { 
          this.loader = false; 
          this.characterForm.patchValue({
            name: this.character.name,
            age: this.character.age,
            colour: this.character.colour
          });
        }
      })
    }
  }

  editCharacter(event: Event, id: string | undefined) {
    event.preventDefault();
    if(id!=undefined) {

      this.character = this.characterForm.value;

      this.service.editCharacter(id, this.character).subscribe({
        error: () => {
          throw new Error("can't edit character!")
        },
        complete: () => {
          this.service.emitCharacterChanged();
          this.getCharacter(this.route.snapshot.paramMap.get('id'));
        }
      })
    }
  }



}
