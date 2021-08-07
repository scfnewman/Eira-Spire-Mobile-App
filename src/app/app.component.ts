import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { Plugins, StatusBarStyle } from '@capacitor/core'
import { DataService } from './services/data.service';

const { SplashScreen, StatusBar } = Plugins

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	constructor(
		private _Platform: Platform,
		private _DataService: DataService
	) {
		this.initializeApp();
	}

	initializeApp() {
		this._Platform.ready().then(() => {
			StatusBar.setStyle({ style: StatusBarStyle.Dark });
		});
	}
}
