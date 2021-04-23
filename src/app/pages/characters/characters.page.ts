import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';

import { CharacterModal } from 'src/app/modals/character/character.component'
import { SkillModal } from 'src/app/modals/skill/skill.component'

import { DataService } from 'src/app/services/data.service';
import { CharacterPotionsModal } from 'src/app/modals/character-potions/character-potions.component';
import { CharacterSpellsModal } from 'src/app/modals/character-spells/character-spells.component';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.page.html',
	styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

	@ViewChild('Slides', { static: false }) Slides: IonSlides;

	Characters;
	PageTitle: string;

	Search: string;

	constructor(
		public _ModalController: ModalController,
		private _Http: HttpClient,
		private _DataService: DataService,
		private _Route: ActivatedRoute,
		private _Router: Router
	) {
		_Route.queryParams.subscribe(params => {
			this.PageTitle = _Router.getCurrentNavigation().extras.state.title
		})
	}

	ngOnInit() {
		this.GetData();
	}

	async GetData() {
		this.Characters = JSON.parse(localStorage.getItem('CharacterData'));
	}

	async PresentCharacterModal(data) {
		const Modal = await this._ModalController.create({
			component: CharacterModal,
			swipeToClose: true,
			componentProps: {
				"Data": data
			}
		});
		return Modal.present();
	}

	async PresentSkillModal(data) {
		const Modal = await this._ModalController.create({
			component: SkillModal,
			swipeToClose: true,
			componentProps: {
				"Data": data
			}
		})

		return Modal.present();
	}

	SlideTo(SlideNo) {
		this.Slides.slideTo(SlideNo);
	}

	IsMagician(_Skills): Boolean {
		if (_Skills && _Skills.filter(Skill => {
			if (Skill.Name == "Magician") return Skill;
		}).length > 0) return true;
		return false;
	}

	IsApothecary(_Skills): Boolean {
		if (_Skills && _Skills.filter(Skill => {
			if (Skill.Name == "Apothecary") return Skill;
		}).length > 0) return true;
		return false;
	}

	GetRankString(Rank) {
		if (Rank == 0) return 'Thane';
		if (Rank == 1) return 'Head Advisor';
		if (Rank == 2) return 'Stone Circle';
		if (Rank == 3) return 'Guard';
		if (Rank == 4) return 'Citizen';
		if (Rank == 5) return 'Associate';
	}

	async ViewSpells(_Character) {
		const Modal = await this._ModalController.create({
			component: CharacterSpellsModal,
			swipeToClose: true,
			componentProps: {
				Data: _Character
			}
		})

		return Modal.present();
	}

	async ViewPotions(_Character) {
		const Modal = await this._ModalController.create({
			component: CharacterPotionsModal,
			swipeToClose: true,
			componentProps: {
				Data: _Character
			}
		})

		return Modal.present();
	}
}
