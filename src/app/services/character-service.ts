import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.interface';
import { CharacterStats } from '../models/character-stats.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  private baseURL: string = 'https://dragonball-api.com/api/characters';
  private characterLimit: number = 20; // Por defecto muestra 10 caracteres

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character> {
    return this.http.get<Character>(this.baseURL + '?limit=' + this.characterLimit);
  }

  getCharacterById(id: number): Observable<CharacterStats> {
    return this.http.get<CharacterStats>('https://dragonball-api.com/api/characters/' + id);
  }
}
