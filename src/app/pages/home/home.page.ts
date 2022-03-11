import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { HelpModal } from 'src/app/modals/help/help.component';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	Pages: any;
	Categories: string[] = [];

	constructor(
		private _Router: Router,
		private _Modal: ModalController,
		private _Alert: AlertController,
		private _DataService: DataService
	) {
		this.GetCategories();
	}

	ngOnInit() {
		let Activated = localStorage.getItem('Activated');
		let MessageShown = localStorage.getItem('MessageShown');

		if (!Activated && !MessageShown) {
			this._Alert.create({
				header: 'Activation',
				message: 'You must activate the app to download the content from the database. Go to Settings and answer the question to activate.',
				cssClass: 'Alert',
				buttons: [{
					text: "Dismiss",
					role: 'cancel'
				}]
			}).then(_Alert => {
				_Alert.present();

				localStorage.setItem('MessageShown', "true");
			})
		}
	}

	OpenCharactersPage(Title) {
		let Extras: NavigationExtras = {
			state: {
				title: Title
			}
		}

		this._Router.navigate(['/characters'], Extras);
	}

	OpenPagesPage(Category) {
		let Extras: NavigationExtras = {
			state: {
				category: Category
			}
		}

		this._Router.navigate(['/pages'], Extras);
	}

	OpenSkillsPage(Skill) {
		let Extras: NavigationExtras = {
			state: {
				skill: Skill
			}
		}

		this._Router.navigate(['/skills'], Extras);
	}

	GetCategories() {
		this._DataService.FetchData().subscribe(_Data => {
			this.Pages = _Data["Page"];
			this.Categories = [];

			if (this.Pages) {
				this.Pages.forEach(Page => {
					if (!this.Categories.includes(Page.Category.trim()))
						this.Categories.push(Page.Category);
				});
			}
		})

	}

	OpenHelp() {
		this._Modal.create({
			component: HelpModal,
			presentingElement: document.getElementById('main-content')
		}).then(_Modal => {
			_Modal.present();
		})
	}

	CalculateCategorySize(Index) {
		let Count = this.Categories.length;

		if(Count < 3) return 12;

		if(Count % 2 == 0) return 6;

		if(Index == Count - 1) return 12;
	}
}
