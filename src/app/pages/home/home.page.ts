import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	Pages: any;
	Categories: string[] = [];

	constructor(
		private _Router: Router
	) { }

	ngOnInit() {
		this.GetCategories();
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
		this.Pages = JSON.parse(localStorage.getItem('PageData'));

		this.Pages.forEach(Page => {
			if(!this.Categories.includes(Page.Category.trim()))
				this.Categories.push(Page.Category);
		});
	}

}
