import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterPipe } from './character.pipe'

@NgModule({
	declarations: [
		CharacterPipe
	],
	imports: [
		CommonModule
	],
	exports: [
		CharacterPipe
	]
})
export class PipesModule { }
