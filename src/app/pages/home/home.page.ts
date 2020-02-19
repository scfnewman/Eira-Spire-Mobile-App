import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(
		private _Router: Router
	) {}

	OpenCharactersPage(Title)
	{
		let Extras: NavigationExtras = {
			state: {
				title: Title
			}
		}

		this._Router.navigate(['/characters'], Extras);
	}

}
