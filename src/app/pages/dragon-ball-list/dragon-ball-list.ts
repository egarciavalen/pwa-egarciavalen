import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Character } from '../../models/character.interface';
import { CharacterService } from '../../services/character-service';
import { CharacterStats } from '../../models/character-stats.interface';

@Component({
  selector: 'app-dragon-ball-list',
  imports: [RouterModule],
  templateUrl: './dragon-ball-list.html',
  styleUrl: './dragon-ball-list.scss',
})
export class DragonBallList {
  characters = signal<CharacterStats[]>([]);
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((res: Character) => this.characters.set(res.items));
  }
}
