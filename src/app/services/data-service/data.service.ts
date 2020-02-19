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
			let json = JSON.stringify(data);
			localStorage.setItem('CharacterData', json);
		});
		this._FireStore.collection<any>('skills').valueChanges().subscribe(data => {
			let json = JSON.stringify(data);
			localStorage.setItem('SkillData', json);
		});		
	}
}
