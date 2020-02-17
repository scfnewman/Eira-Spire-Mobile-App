import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CharacterModal } from '../components/character/character.component'

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(
		public _ModalController: ModalController
	) {}

	async PresentModal()
	{
		const Modal = await this._ModalController.create({
			component: CharacterModal
		});
		return Modal.present();
	}

}
