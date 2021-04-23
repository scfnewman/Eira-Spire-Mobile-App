import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(
		private _FireStore: AngularFirestore
	) {
		this._FireStore.collection<any>('characters').valueChanges().subscribe(data => {
			if (data) {
				let json = JSON.stringify(data);
				localStorage.setItem('CharacterData', json);
			}
		});
		this._FireStore.collection<any>('skills').valueChanges().subscribe(data => {
			if (data) {
				let json = JSON.stringify(data);
				localStorage.setItem('SkillData', json);
			}
		});
		this._FireStore.collection<any>('pages').valueChanges().subscribe(data => {
			if (data) {
				let json = JSON.stringify(data);
				localStorage.setItem('PageData', json);
			}
		});
		this._FireStore.collection<any>('potions').valueChanges().subscribe(data => {
			if (data) {
				let json = JSON.stringify(data);
				localStorage.setItem('PotionData', json);
			}
		});
		this._FireStore.collection<any>('spells').valueChanges().subscribe(data => {
			if (data) {
				let json = JSON.stringify(data);
				localStorage.setItem('SpellData', json);
			}
		});
	}
}
