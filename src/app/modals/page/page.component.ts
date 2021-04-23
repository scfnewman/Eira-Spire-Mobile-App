import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss'],
})
export class PageModal implements OnInit {

	@Input() Data;

	HideSections: boolean[] = [];

	constructor(
		private _ModalCtrl: ModalController
	) { }

	ngOnInit() {
		this.Data.Sections.forEach(() => this.HideSections.push(false));
	}

	Dismiss() {
		this._ModalCtrl.dismiss();
	}

}
