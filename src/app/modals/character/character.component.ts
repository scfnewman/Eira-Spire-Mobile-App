import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'CharacterModal',
	templateUrl: './character.component.html',
	styleUrls: ['./character.component.scss'],
})
export class CharacterModal implements OnInit {

	@Input() Data: any;

	HideSummary: boolean = false;
	HideDeath: boolean = false;
	HideBackground: boolean = false;
	HideEarnedName: boolean = false;
	HideSections: boolean[] = [];

	constructor(
		private _ModalController: ModalController
	) { }

	ngOnInit() {
		this.Data.Sections.forEach(() => this.HideSections.push(false));
	}

	Dismiss() {
		this._ModalController.dismiss({
			'dismissed': true
		});
	}

}
