import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';

import { CharacterModal } from 'src/app/modals/character/character.component'
import { SkillModal } from 'src/app/modals/skill/skill.component'

import { DataService } from 'src/app/services/data-service/data.service';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.page.html',
	styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

	@ViewChild('Slides', {static: false}) Slides: IonSlides;

	Characters;
	PageTitle: string;

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

	ngOnInit() 
	{
		this.GetData();
	}

	async GetData()
	{
		this.Characters = JSON.parse(localStorage.getItem('CharacterData'));
	}

	async PresentCharacterModal(data) 
	{
		const Modal = await this._ModalController.create({
			component: CharacterModal,
			swipeToClose: true,
			componentProps: {
				"Data": data
			}
		});
		return Modal.present();
	}

	async PresentSkillModal(data) 
	{
		const Modal = await this._ModalController.create({
			component: SkillModal,
			swipeToClose: true,
			componentProps: {
				"Data": data
			}
		})

		return Modal.present();
	}

	SlideTo(SlideNo)
	{
		this.Slides.slideTo(SlideNo);
	}

}
