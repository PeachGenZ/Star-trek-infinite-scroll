import { StartekService } from './../services/startek.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  characters: Character[] = []

  constructor(
    private starTekService: StartekService
  ) {}
  
  ngOnInit(){
    this.starTekService.getCharacter().subscribe(result => {
      this.characters = this.characters.concat(this.characters, result)
      console.log(this.characters);
    })
  }

}
