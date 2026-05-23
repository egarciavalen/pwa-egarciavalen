import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CharacterDetail } from '../models/character-detail.interface';
import { Character } from '../models/character.interface';

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

  getCharacterDetailById(id: string): Observable<CharacterDetail> {
    return this.http.get<CharacterDetail>('https://dragonball-api.com/api/characters/' + id).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
