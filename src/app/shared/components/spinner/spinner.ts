import { Component, Input } from '@angular/core';

/* ANGULAR MATERIAL */
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  imports: [MatProgressSpinnerModule],
  templateUrl: './spinner.html',
  styleUrl: './spinner.scss',
})
export class Spinner {

  @Input() isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }
}
