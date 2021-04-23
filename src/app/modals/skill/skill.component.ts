import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-skill',
	templateUrl: './skill.component.html',
	styleUrls: ['./skill.component.scss'],
})
export class SkillModal implements OnInit {

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
