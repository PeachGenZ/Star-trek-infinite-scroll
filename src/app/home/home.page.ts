import { StartekService } from './../services/startek.service';
import { Component, OnInit  } from '@angular/core';
import { Character } from '../models/character';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  characters: Character[] = []
  page: number = 0;
  private characterSubscribe: Subscription;
  lastPage: boolean = false;
  


  constructor(
    private starTekService: StartekService
  ) {}
  
  ngOnInit(){
    this.characterSubscribe =  this.starTekService.getCharacter(0).subscribe(
      results => {
        this.characters = results.results;
        this.lastPage = results.lastPage;
      })
  }

  ngOnDestroy() {
    this.characterSubscribe.unsubscribe();
  }

  loadMoreData(event) {
    this.page++;
    this.characterSubscribe = this.starTekService.getCharacter(this.page).subscribe(
      results => {
        this.characters = [...this.characters, ...results.results];
        this.lastPage = results.lastPage;
        event.target.complete()
      }
    )
  }

}
