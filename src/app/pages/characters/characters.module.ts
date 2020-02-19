import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersPageRoutingModule } from './characters-routing.module';

import { CharactersPage } from './characters.page';

import { PipesModule } from 'src/app/pipes/pipes.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	CharactersPageRoutingModule,
	PipesModule
  ],
  declarations: [CharactersPage]
})
export class CharactersPageModule {}
