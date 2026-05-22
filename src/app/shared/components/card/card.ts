import { Component, Input } from '@angular/core';
import { CharacterDetail } from '../../../models/character-detail.interface';
import { RouterLink } from '@angular/router';

// Angular Material
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

  // Input
  @Input() character!: CharacterDetail;

  constructor() {}

}
