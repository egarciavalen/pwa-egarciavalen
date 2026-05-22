import { Component, OnInit, signal, ɵINTERNAL_APPLICATION_ERROR_HANDLER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterDetail } from '../../models/character-detail.interface';
import { Character } from '../../models/character.interface';
import { CharacterService } from '../../services/character-service';
import { CommonModule } from '@angular/common';

/* ANGULAR MATERIAL */
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/* SHARED */
import { Card } from '../../shared/components/card/card';
import { Spinner } from '../../shared/components/spinner/spinner';
import { Grid } from '../../shared/components/grid/grid';


@Component({
  selector: 'app-dragon-ball-list',
  imports: [RouterModule, Spinner, MatIconModule, MatButtonModule, CommonModule, Card, Grid],
  templateUrl: './dragon-ball-list.html',
  styleUrl: './dragon-ball-list.scss',
})
export class DragonBallList implements OnInit {
  characters = signal<CharacterDetail[]>([]);
  isLoading = signal(true);

  // Signal para actualizar la vista
  isCardView = signal(true);

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((res: Character) => {
      setTimeout(() => {
        this.isLoading.set(false);
        this.characters.set(res.items);
      }, 1000);
    });
  }

  showCardView(): void {
    this.isCardView.set(true);
  }

  showTableView(): void {
    this.isCardView.set(false);
  }

}
