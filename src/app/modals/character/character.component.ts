import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'CharacterModal',
	templateUrl: './character.component.html',
	styleUrls: ['./character.component.scss'],
})
export class CharacterModal implements OnInit {

	@Input() Data: any;

	constructor(
		private _ModalController: ModalController
	) { }

	ngOnInit() { }

	Dismiss() {
		this._ModalController.dismiss({
			'dismissed': true
		});
	}

}
