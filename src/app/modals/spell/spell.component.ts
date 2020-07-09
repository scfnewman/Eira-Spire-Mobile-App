import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss'],
})
export class SpellModal implements OnInit {

	@Input() Data: any;

	constructor(
		private _ModalController: ModalController
	) { }

	ngOnInit() {
	}

	Dismiss() {
		this._ModalController.dismiss({
			'dismissed': true
		});
	}

}
