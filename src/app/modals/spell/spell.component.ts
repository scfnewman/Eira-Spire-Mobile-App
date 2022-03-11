import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss'],
})
export class SpellModal implements OnInit {

	@Input() Data: any;

	HideDescription: boolean = false;
	HideEffects: boolean = false;
	HideSections: boolean[] = [];

	constructor(
		private _ModalController: ModalController,
		public _Sanitizer: DomSanitizer
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
