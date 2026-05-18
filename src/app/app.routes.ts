import { Routes } from '@angular/router';
import { DragonBallList } from './pages/dragon-ball-list/dragon-ball-list';
import { DragonBallDetail } from './pages/dragon-ball-detail/dragon-ball-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'dragonball', pathMatch: 'full' },
  { path: 'dragonball', component: DragonBallList },
  { path: 'dragonball/:id', component: DragonBallDetail }
];