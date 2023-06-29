import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from './character';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  private characterChangedSubject = new Subject<void>();
  characterChanged$ = this.characterChangedSubject.asObservable();

  private baseApiUrl = 'https://crudcrud.com/api';
  private keyApi = '4db1a2b2e04640aeacbc310a55647842';
  private characterName = "unicorns";

  constructor(private http : HttpClient) { }

  getcharactersData() : Observable<Character[]> {
    return this.http.get(`${this.baseApiUrl}/${this.keyApi}/${this.characterName}`).pipe(
      map((data : any) => data as Character[])
    );
  }

  getSingleCharacterData(id : string): Observable<Character> {
    return this.http.get(`${this.baseApiUrl}/${this.keyApi}/${this.characterName}/${id}`).pipe(
      map((data : any) => data as Character)
    )
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

  emitCharacterChanged() {
    this.characterChangedSubject.next();
  }

}
