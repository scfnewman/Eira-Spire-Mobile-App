import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirebaseConfig } from './../credentials';

import { CharacterModal } from './modals/character/character.component'
import { SkillModal } from './modals/skill/skill.component'

import { DataService } from './services/data-service/data.service'
import { PageModal } from './modals/page/page.component';
import { CharacterPotionsModal } from './modals/character-potions/character-potions.component';
import { PotionModal } from './modals/potion/potion.component';
import { SpellModal } from './modals/spell/spell.component';
import { CharacterSpellsModal } from './modals/character-spells/character-spells.component';

@NgModule({
	declarations: [
		AppComponent,
		CharacterModal,
		SkillModal,
		PageModal,
		PotionModal,
		SpellModal,
		CharacterPotionsModal,
		CharacterSpellsModal,
	],
	entryComponents: [
		CharacterModal,
		SkillModal,
		PageModal,
		PotionModal,
		SpellModal,
		CharacterPotionsModal,
		CharacterSpellsModal,
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
