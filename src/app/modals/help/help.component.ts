import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-help',
	templateUrl: './help.component.html',
	styleUrls: ['./help.component.scss'],
})
export class HelpModal implements OnInit {

	@Input() Data;

	constructor(
		private _Modal: ModalController
	) { }

	ngOnInit() { }

	Dismiss() {
		this._Modal.dismiss();
	}

}
