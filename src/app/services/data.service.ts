import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	private AppData: BehaviorSubject<any>;
	private _AppData;
	public Activated;

	CharacterSub: Subscription;
	SkillSub: Subscription;
	PageSub: Subscription;
	PotionSub: Subscription;
	SpellSub: Subscription;
	AssetSub: Subscription;

	constructor(
		private _FireStore: AngularFirestore,
		private _Alert: AlertController,
		private _Toast: ToastController
	) {
		this._AppData = {
			Character: this.FetchStoredData('Character'),
			Skill: this.FetchStoredData('Skill'),
			Page: this.FetchStoredData('Page'),
			Potion: this.FetchStoredData('Potion'),
			Spell: this.FetchStoredData('Spell'),
			Asset: this.FetchStoredData('Asset'),
		}

		this.AppData = new BehaviorSubject<any>(this._AppData);

		this.Activated = localStorage.getItem('Activated');
		if (this.Activated) this.DownloadData();
	}

	public FetchData() {
		return this.AppData.asObservable();
	}

	public DownloadData() {
		let CharacterDownload = localStorage.getItem('CharacterDownload') ? parseInt(localStorage.getItem('CharacterDownload')) : 0;
		let SkillDownload = localStorage.getItem('SkillDownload') ? parseInt(localStorage.getItem('SkillDownload')) : 0;
		let PageDownload = localStorage.getItem('PageDownload') ? parseInt(localStorage.getItem('PageDownload')) : 0;
		let PotionDownload = localStorage.getItem('PotionDownload') ? parseInt(localStorage.getItem('PotionDownload')) : 0;
		let SpellDownload = localStorage.getItem('SpellDownload') ? parseInt(localStorage.getItem('SpellDownload')) : 0;
		let AssetDownload = localStorage.getItem('AssetDownload') ? parseInt(localStorage.getItem('AssetDownload')) : 0;

		this.CharacterSub = this._FireStore.collection<any>('characters', (ref) => ref.where('LastUpdate', '>=', CharacterDownload)).valueChanges().subscribe(data => {
			if (data) {
				this.UpdateStoredData('Character', data);
			}
		});

		this.SkillSub = this._FireStore.collection<any>('skills', (ref) => ref.where('LastUpdate', '>=', SkillDownload)).valueChanges().subscribe(data => {
			if (data) {
				this.UpdateStoredData('Skill', data);
			}
		});

		this.PageSub = this._FireStore.collection<any>('pages', (ref) => ref.where('LastUpdate', '>=', PageDownload)).valueChanges().subscribe(data => {
			if (data) {
				this.UpdateStoredData('Page', data);
			}
		});

		this.PotionSub = this._FireStore.collection<any>('potions', (ref) => ref.where('LastUpdate', '>=', PotionDownload)).valueChanges().subscribe(data => {
			if (data) {
				this.UpdateStoredData('Potion', data);
			}
		});

		this.SpellSub = this._FireStore.collection<any>('spells', (ref) => ref.where('LastUpdate', '>=', SpellDownload)).valueChanges().subscribe(data => {
			if (data) {
				this.UpdateStoredData('Spell', data);
			}
		});

		/*
		this.AssetSub = this._FireStore.collection<any>('assets', (ref) => ref.where('LastUpdate', '>=', AssetDownload)).valueChanges().subscribe(data => {
			if (data) {
				this.UpdateStoredData('Asset', data);
			}
		});
		*/

		this._Toast.create({
			message: "Downloading latest data...",
			duration: 2000,
			cssClass: "Toast"
		}).then(_Toast => {
			_Toast.present();
		});
	}

	public DisableDownload() {
		this.CharacterSub.unsubscribe();
		this.SkillSub.unsubscribe();
		this.PageSub.unsubscribe();
		this.PotionSub.unsubscribe();
		this.SpellSub.unsubscribe();
		//this.AssetSub.unsubscribe();
	}

	FetchStoredData(CollectionName) {
		return JSON.parse(localStorage.getItem(CollectionName + "Data"));
	}

	UpdateStoredData(CollectionName, Data) {
		let Current = JSON.parse(localStorage.getItem(CollectionName + "Data"));

		if (Current) {
			Data.forEach(_UpdatedItem => {
				for (let i = 0; i < Current.length; i++) {
					let _CurrentItem = Current[i];
					if (_UpdatedItem.PageID == _CurrentItem.PageID) {
						Current[i] = _UpdatedItem;
						break;
					}
				}
			});

			this._AppData[CollectionName] = Current;
			localStorage.setItem(CollectionName + "Data", JSON.stringify(Current));
			localStorage.setItem(CollectionName + "Download", Date.now().toString());
		} else {
			this._AppData[CollectionName] = Data;
			localStorage.setItem(CollectionName + "Data", JSON.stringify(Data));
			localStorage.setItem(CollectionName + "Download", Date.now().toString());
		}

		this.AppData.next(this._AppData);
	}

	ClearStoredData(CollectionName) {
		this._AppData[CollectionName] = null;
		localStorage.removeItem(CollectionName + "Data");
		localStorage.removeItem(CollectionName + "Download");
	}

	ClearAllStoredData() {
		this._Alert.create({
			header: 'Warning',
			message: 'Are you sure you wish to delete all data? It will have to be redownloaded.',
			cssClass: 'Alert',
			buttons: [{
				text: 'No',
				role: 'cancel'
			},
			{
				text: 'Yes',
				role: 'success',
				handler: () => {
					this._Toast.create({
						message: "Data deleted.",
						duration: 2000,
						cssClass: "Toast"
					}).then(_Toast => {
						_Toast.present();

						this.ClearStoredData('Character');
						this.ClearStoredData('Skill');
						this.ClearStoredData('Page');
						this.ClearStoredData('Potion');
						this.ClearStoredData('Spell');
						this.ClearStoredData('Asset');

						localStorage.removeItem('Activated');
						this.Activated = false;

						this.DisableDownload();

						this.AppData.next(this._AppData);
					});
				}
			}]
		}).then(_Alert => {
			_Alert.present();
		});
	}
}
