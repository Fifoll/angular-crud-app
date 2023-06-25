import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  private baseApiUrl = 'https://crudcrud.com/api';
  private keyApi = '6c91c398b9e14b689efbe73731597326';
  private characterName = "unicorns";

  constructor(private http : HttpClient) { }

  getcharactersData() {
    return this.http.get(`${this.baseApiUrl}/${this.keyApi}/${this.characterName}`);
  }

  getSingleCharacterData(id : number) {
    return this.http.get(`${this.baseApiUrl}/${this.keyApi}/${this.characterName}/${id}`);
  }

  addCharacter(character : any) {
    return this.http.post(`${this.baseApiUrl}/${this.keyApi}/${this.characterName}`, character);
  }

  editCharacter(id: number, character : any) {
    return this.http.put(`${this.baseApiUrl}/${this.keyApi}/${this.characterName}/${id}`, character);
  }

  deleteCharacter(id: number) {
    return this.http.delete(`${this.baseApiUrl}/${this.keyApi}/${this.characterName}/${id}`);
  }

}
