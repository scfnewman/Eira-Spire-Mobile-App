import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { CharacterModal } from 'src/app/modals/character/character.component'
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.page.html',
	styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

	Characters;

	constructor(
		public _ModalController: ModalController,
		private _Http: HttpClient,
		private _DataService: DataService
	) {}

	ngOnInit() 
	{
		this.GetData();
	}

	async GetData()
	{
		this.Characters = JSON.parse(localStorage.getItem('CharacterData'));
	}


	async PresentModal(data) {
		const Modal = await this._ModalController.create({
			component: CharacterModal,
			swipeToClose: true,
			componentProps: {
				"Data": data
			}
		});
		return Modal.present();
	}

}
