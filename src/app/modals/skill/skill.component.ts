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
		if (this.Data.Count)
			this.GetData()
	}

	GetData() {
		let Skills: any[] = JSON.parse(localStorage.getItem('SkillData'))
		this.Data = Skills.find(Skill => {
			if(Skill.Name == this.Data.Name) return Skill;
		})
	}

	Dismiss() {
		this._ModalController.dismiss({
			'dismissed': true
		});
	}

}
