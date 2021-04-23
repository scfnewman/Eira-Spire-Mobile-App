import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PotionModal } from '../potion/potion.component';

@Component({
	selector: 'app-character-potions',
	templateUrl: './character-potions.component.html',
	styleUrls: ['./character-potions.component.scss'],
})
export class CharacterPotionsModal implements OnInit {

	Potions: Array<any>;
	@Input() Data: any;

	Search;

	constructor(
		private _ModalController: ModalController
	) { }

	ngOnInit() {
		this.GetData();
	}

	async GetData() {
		this.Potions = JSON.parse(localStorage.getItem('PotionData'));
		this.Potions = this.Potions.filter(Potion => {
			for (let i = 0; i < this.Data.Potions.length; i++) {
				if (Potion.Name == this.Data.Potions[i].Name) return Potion;
			}
		})
	}

	Dismiss() {
		this._ModalController.dismiss({
			'dismissed': true
		});
	}

	async OpenPotionModal(_Potion) {
		const Modal = await this._ModalController.create({
			component: PotionModal,
			swipeToClose: true,
			componentProps: {
				Data: _Potion
			}
		})

		return Modal.present();
	}

}
