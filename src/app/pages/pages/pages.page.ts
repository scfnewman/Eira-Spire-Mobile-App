import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PageModal } from 'src/app/modals/page/page.component';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-pages',
	templateUrl: './pages.page.html',
	styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

	Category: string;
	Pages: any;

	Search: string;

	constructor(
		public _ModalController: ModalController,
		private _Route: ActivatedRoute,
		private _Router: Router,
		private _DataService: DataService
	) {
		_Route.queryParams.subscribe(params => {
			this.Category = _Router.getCurrentNavigation().extras.state.category
		});

		this.GetData();
	}

	ngOnInit() {
	}

	GetData() {
		this._DataService.FetchData().subscribe(_Data => {
			this.Pages = _Data["Page"];
		});		
	}

	async OpenPageModal(Data)
	{
		const Modal = await this._ModalController.create({
			component: PageModal,
			presentingElement: document.getElementById('main-content'),
			componentProps: {
				"Data": Data
			}
		})

		return Modal.present();
	}

}
