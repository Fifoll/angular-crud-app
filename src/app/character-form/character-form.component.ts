import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Character } from '../character';
import { CharacterServiceService } from '../character-service.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {
  characterForm!: FormGroup;
  newCharacter: Character = {
    name: '',
    age: 0,
    colour: ''
  };

  constructor(private fb: FormBuilder, private service: CharacterServiceService) { }

  ngOnInit(): void {
    this.characterForm = this.fb.group({
      name: [''],
      age: [0],
      colour: ['']
    });
  }

  addCharacter(event: Event) {
    event.preventDefault();
    this.newCharacter = this.characterForm.value;
    this.service.addCharacter(this.newCharacter).subscribe({
      next: () => console.log("start"),
      complete: () => console.log("added")
    })
  }
}







