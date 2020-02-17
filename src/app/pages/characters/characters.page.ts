import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CharacterModal } from '../../components/character/character.component'

@Component({
	selector: 'app-characters',
	templateUrl: './characters.page.html',
	styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

	constructor(
		public _ModalController: ModalController
	) { }

	ngOnInit() {
	}

	async PresentModal() {
		const Modal = await this._ModalController.create({
			component: CharacterModal
		});
		return Modal.present();
	}

}
