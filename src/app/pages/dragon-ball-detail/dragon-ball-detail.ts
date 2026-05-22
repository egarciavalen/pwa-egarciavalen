import { Component, OnInit, signal } from '@angular/core';
import { CharacterDetail } from '../../models/character-detail.interface';
import { CharacterService } from '../../services/character-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-dragon-ball-detail',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './dragon-ball-detail.html',
  styleUrl: './dragon-ball-detail.scss',
})
export class DragonBallDetail implements OnInit {
  characterDetail = signal<CharacterDetail>({
    id: 0,
    name: '',
    ki: '',
    maxKi: '',
    race: '',
    gender: '',
    description: '',
    image: '',
    affiliation: ''
  });

  isCharacterDetailView = signal(false);

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}


  ngOnInit(): void {
    const characterId = this.activatedRoute.snapshot.paramMap.get('id');
    if (characterId) {
      this.characterService.getCharacterDetailById(characterId).subscribe((detail) => {
        if (!detail) {
          this.router.navigateByUrl('/');
        }
        this.characterDetail.set(detail);
      });
    }
  }

  toggleCharacterDetailView(): void {
    this.isCharacterDetailView.update(value => !value);
  }
}
