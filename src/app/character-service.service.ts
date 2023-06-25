import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from './character';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  private baseApiUrl = 'https://crudcrud.com/api';
  private keyApi = '6c91c398b9e14b689efbe73731597326';
  private characterName = "unicorns";

  constructor(private http : HttpClient) { }

  getcharactersData() : Observable<Character[]> {
    return this.http.get(`${this.baseApiUrl}/${this.keyApi}/${this.characterName}`).pipe(
      map((data : any) => data as Character[])
    );
  }

  getSingleCharacterData(id : string) {
    return this.http.get(`${this.baseApiUrl}/${this.keyApi}/${this.characterName}/${id}`);
  }

  addCharacter(character : Character) {
    return this.http.post(`${this.baseApiUrl}/${this.keyApi}/${this.characterName}`, character);
  }

  editCharacter(id: string, character : Character) {
    return this.http.put(`${this.baseApiUrl}/${this.keyApi}/${this.characterName}/${id}`, character);
  }

  deleteCharacter(id: string) {
    return this.http.delete(`${this.baseApiUrl}/${this.keyApi}/${this.characterName}/${id}`);
  }

}
