import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins } from '@capacitor/core'
import { DataService } from './services/data-service/data.service';

const {SplashScreen} = Plugins

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	constructor(
		private platform: Platform,
		private statusBar: StatusBar,
		private _DataService: DataService
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
		});
	}
}
