import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PageModal } from 'src/app/modals/page/page.component';

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
		private _Router: Router
	) {
		_Route.queryParams.subscribe(params => {
			this.Category = _Router.getCurrentNavigation().extras.state.category
		})
	}

	ngOnInit() {
		this.GetData();
	}

	async GetData() {
		this.Pages = JSON.parse(localStorage.getItem("PageData"));
	}

	async OpenPageModal(Data)
	{
		const Modal = await this._ModalController.create({
			component: PageModal,
			componentProps: {
				"Data": Data
			}
		})

		return Modal.present();
	}

}
