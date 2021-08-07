import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginModal implements OnInit {

	LoginForm: FormGroup;

	constructor(
		private _Modal: ModalController,
		private _FormBuilder: FormBuilder,
		private _FireAuth: AngularFireAuth,
		private _Toast: ToastController
	) {
		this.LoginForm = _FormBuilder.group({
			Username: new FormControl(null, Validators.required),
			Password: new FormControl(null, Validators.required),
			Remember: new FormControl(false)
		});
	}

	ngOnInit() {
	}

	Dismiss() {
		this._Modal.dismiss(false);
	}

	Submit() {
		if (this.LoginForm.valid) {
			this._FireAuth.auth.signInWithEmailAndPassword(this.LoginForm.controls["Username"].value, this.LoginForm.controls["Password"].value).then(Result => {
				if(this.LoginForm.controls["Remember"].value == true)
				{
					localStorage.setItem("Token", (this.LoginForm.controls["Username"].value + Date.now().toString()).toUpperCase());
					localStorage.setItem("Token_Expiry", (Date.now() + (86400 * 1000 * 365)).toString());
				} 

				this._Modal.dismiss(true);
			}).catch(Error => {
				this.Toast(Error);
			})
		} else {
			this.Toast("Please provide a Username and Password")
		}
	}

	Toast(Message) {
		this._Toast.create({
			message: Message,
			duration: 2000
		}).then(_Toast => {
			_Toast.present();
		})
	}

}
