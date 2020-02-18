import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CharacterModal } from './modals/character/character.component'
import { DataService } from './services/data-service/data.service'

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirebaseConfig } from './../credentials';
import { CharacterPipe } from './pipes/character.pipe';

@NgModule({
	declarations: [
		AppComponent,
		CharacterModal,
		CharacterPipe,
	],
	entryComponents: [
		CharacterModal,
	],
	imports: [
		HttpClientModule,
		BrowserModule, 
		IonicModule.forRoot(), 
		AppRoutingModule,
		AngularFireModule.initializeApp(FirebaseConfig),
		AngularFirestoreModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		DataService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
