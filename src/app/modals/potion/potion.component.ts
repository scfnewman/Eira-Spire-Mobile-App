import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-potion',
	templateUrl: './potion.component.html',
	styleUrls: ['./potion.component.scss'],
})
export class PotionModal implements OnInit {

	@Input() Data: any;

	HideDefinition: boolean = false;
	HideDescription: boolean = false;
	HideRoleplayingEffect: boolean = false;
	HideMechanicalEffect: boolean = false;
	HideRecipe: boolean = false;
	HideNotes: boolean = false;

	constructor(
		private _ModalController: ModalController,
		public _Sanitizer: DomSanitizer
	) { }

	ngOnInit() {
	}

	Dismiss() {
		this._ModalController.dismiss({
			'dismissed': true
		});
	}

}
