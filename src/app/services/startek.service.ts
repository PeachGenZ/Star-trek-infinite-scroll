import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterQuery } from '../models/character';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartekService {
  constructor(
    private http:HttpClient) {}

  getCharacter(page: number): Observable<CharacterQuery>{
      let url = `http://stapi.co/api/v1/rest/character/search?pageNumber=${page}`
      return this.http.get(url).pipe(
        map(data => { 
          return {
            results: data['characters'],
            lastPage: data['page']['lastPage']
          }})
      )
    }
}
