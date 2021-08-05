import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LoginModal } from '../modals/login/login.component';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private _Modal: ModalController
	) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		return new Promise<any>((resolve) => {
			let Token: string = localStorage.getItem("Token");
			let Expiry: number = parseInt(localStorage.getItem("Token_Expiry"));

			if(Token && Expiry > Date.now())
			{
				resolve(true);
			} else {
				if(Expiry < Date.now())
				{
					localStorage.removeItem("Token");
					localStorage.removeItem("TokenExpiry");
				}

				this._Modal.create({
					component: LoginModal,
					presentingElement: document.getElementById('main-content')
				}).then(_Modal => {
					_Modal.present();

					_Modal.onDidDismiss().then(Out => {
						resolve(Out.data);
					})
				})
			}
		})
	}
}
