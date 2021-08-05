import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

	public Answer: string;
	public ContentDownload;

	constructor(
		public _DataService: DataService
	) {}

	ngOnInit() {}

	Submit() {
		if (this.Answer.toUpperCase() == "ANVIL") {

			this._DataService.Activated = true;
			localStorage.setItem('Activated', this._DataService.Activated);

			this._DataService.DownloadData();
		}
	}

}
