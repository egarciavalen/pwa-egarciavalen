import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Character } from '../../models/character.interface';
import { CharacterService } from '../../services/character-service';
import { CharacterDetail } from '../../models/character-detail.interface';

@Component({
  selector: 'app-dragon-ball-list',
  imports: [RouterModule],
  templateUrl: './dragon-ball-list.html',
  styleUrl: './dragon-ball-list.scss',
})
export class DragonBallList implements OnInit {
  characters = signal<CharacterDetail[]>([]);
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService
      .getCharacters()
      .subscribe((res: Character) => this.characters.set(res.items));
  }
}
