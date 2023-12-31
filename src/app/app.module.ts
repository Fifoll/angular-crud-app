import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterFormComponent } from './character-form/character-form.component';
import { LoaderComponent } from './loader/loader.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterFormComponent,
    LoaderComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
