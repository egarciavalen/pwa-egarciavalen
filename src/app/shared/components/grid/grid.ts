import { Component, Input } from '@angular/core';
import { CharacterDetail } from '../../../models/character-detail.interface';
import { RouterLink } from '@angular/router';

/* ANGULAR MATERIAL */
import { MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-grid',
  imports: [MatTableModule, RouterLink],
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
})
export class Grid {

  // Input
  @Input() characters!: CharacterDetail[];

  columnsToDisplay = ['id', 'name'];

  constructor() {}
}
