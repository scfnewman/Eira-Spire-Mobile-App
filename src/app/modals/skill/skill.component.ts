import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-skill',
	templateUrl: './skill.component.html',
	styleUrls: ['./skill.component.scss'],
})
export class SkillModal implements OnInit {

	Skills: Array<any>;
	@Input() Data: any;

	Skill;

	constructor(
		private _ModalController: ModalController
	) { }

	ngOnInit() 
	{
		this.GetData();
	}

	async GetData()
	{
		this.Skills = JSON.parse(localStorage.getItem('SkillData'));
		this.Skills.filter(Skill => {
			if(Skill.Name == this.Data.Name) this.Skill = Skill;
		})
	}

	Dismiss() 
	{
		this._ModalController.dismiss({
			'dismissed': true
		});
	}

}
