import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

const routes: Routes = [
    {path: 'character/:id', component: CharacterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }