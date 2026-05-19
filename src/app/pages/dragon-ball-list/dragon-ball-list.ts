import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterDetail } from '../../models/character-detail.interface';
import { Character } from '../../models/character.interface';
import { CharacterService } from '../../services/character-service';
import { Spinner } from '../../shared/components/spinner/spinner';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-dragon-ball-list',
  imports: [RouterModule, Spinner, MatTableModule],
  templateUrl: './dragon-ball-list.html',
  styleUrl: './dragon-ball-list.scss',
})
export class DragonBallList implements OnInit {
  characters = signal<CharacterDetail[]>([]);
  isLoading = signal(true);
  columnsToDisplay = ['id', 'name'];


  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((res: Character) => {
      setTimeout(() => {
        this.isLoading.set(false);
        this.characters.set(res.items);
      }, 1000);
    });
  }
}
