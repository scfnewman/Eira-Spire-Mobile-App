import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SkillModal } from 'src/app/modals/skill/skill.component';
import { SpellModal } from 'src/app/modals/spell/spell.component';
import { PotionModal } from 'src/app/modals/potion/potion.component';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.page.html',
	styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {

	Category: string
	Skills: any[];

	Search: string

	constructor(
		public _ModalController: ModalController,
		private _Route: ActivatedRoute,
		private _Router: Router,
		private _DataService: DataService
	) {
		_Route.queryParams.subscribe(params => {
			this.Category = _Router.getCurrentNavigation().extras.state.skill
		});		
	}

	ngOnInit() {
		this.GetData();
	}

	GetData() {
		this._DataService.FetchData().subscribe(_Data => {
			switch (this.Category) {
				case 'Skills':
					this.Skills = _Data["Skill"];
					break;
				case 'Potions':
					this.Skills = _Data["Potion"];
					break;
				case 'Spells':
					this.Skills = _Data["Spell"];
					break;
			}
		});
	}

	async OpenSkillModal(data) {
		switch (this.Category) {
			case 'Skills':
				const Skill = await this._ModalController.create({
					component: SkillModal,
					swipeToClose: true,
					presentingElement: document.getElementById('main-content'),
					componentProps: {
						Data: data
					}
				})

				return Skill.present();
			case 'Potions':
				const Potion = await this._ModalController.create({
					component: PotionModal,
					swipeToClose: true,
					presentingElement: document.getElementById('main-content'),
					componentProps: {
						Data: data
					}
				})

				return Potion.present();
			case 'Spells':
				const Spell = await this._ModalController.create({
					component: SpellModal,
					swipeToClose: true,
					presentingElement: document.getElementById('main-content'),
					componentProps: {
						Data: data
					}
				})

				return Spell.present();
		}
	}
}
