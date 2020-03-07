import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterPipe } from './character.pipe';
import { PagePipe } from './page.pipe'

@NgModule({
	declarations: [
		CharacterPipe,
		PagePipe
	],
	imports: [
		CommonModule
	],
	exports: [
		CharacterPipe,
		PagePipe
	]
})
export class PipesModule { }
