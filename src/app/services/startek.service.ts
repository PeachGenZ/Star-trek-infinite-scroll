import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartekService {

  constructor(
    private http:HttpClient) { }

  getCharacter(): Observable<Character>{
    let url = 'http://stapi.co/api/v1/rest/character/search'
    return this.http.get(url).pipe(
      map(data => { 
        return data['characters']
      })
    )
  }
}
