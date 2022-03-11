import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'app-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss'],
})
export class PageModal implements OnInit {

	@Input() Data;

	HideSections: boolean[] = [];

	constructor(
		private _ModalCtrl: ModalController,
		public _Sanitizer: DomSanitizer
	) { }

	ngOnInit() {
		this.Data.Sections.forEach(() => this.HideSections.push(false));
	}

	Dismiss() {
		this._ModalCtrl.dismiss();
	}

}
