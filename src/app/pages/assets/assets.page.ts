import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-assets',
	templateUrl: './assets.page.html',
	styleUrls: ['./assets.page.scss'],
})
export class AssetsPage implements OnInit {

	Assets: any[];
	Search: string;

	constructor() { }

	ngOnInit() {
		this.Assets = JSON.parse(localStorage.getItem("AssetData"));
	}

}
