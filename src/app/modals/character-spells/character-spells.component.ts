import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpellModal } from '../spell/spell.component';

@Component({
  selector: 'app-character-spells',
  templateUrl: './character-spells.component.html',
  styleUrls: ['./character-spells.component.scss'],
})
export class CharacterSpellsModal implements OnInit {

	Spells: Array<any>;
	@Input() Data: any;

	Search: string;

	constructor(
		private _ModalController: ModalController
	) { }

	ngOnInit() {
		this.GetData();
	}

	async GetData() {
		this.Spells = JSON.parse(localStorage.getItem('SpellData'));
		this.Spells = this.Spells.filter(Spell => {
			for (let i = 0; i < this.Data.Spells.length; i++) {
				if (Spell.Name == this.Data.Spells[i].Name) return Spell;
			}
		})
	}

	Dismiss() {
		this._ModalController.dismiss({
			'dismissed': true
		});
	}

	async OpenSpellModal(_Spell) {
		const Modal = await this._ModalController.create({
			component: SpellModal,
			swipeToClose: true,
			componentProps: {
				Data: _Spell
			}
		})

		return Modal.present();
	}

}
