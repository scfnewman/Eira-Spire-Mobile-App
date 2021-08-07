import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterPipe } from './character.pipe';
import { PagePipe } from './page.pipe';
import { SkillPipe } from './skill.pipe'

@NgModule({
	declarations: [
		CharacterPipe,
		PagePipe,
		SkillPipe,
	],
	imports: [
		CommonModule
	],
	exports: [
		CharacterPipe,
		PagePipe,
		SkillPipe
	]
})
export class PipesModule { }
