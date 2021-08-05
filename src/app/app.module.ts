import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { FirebaseConfig } from './../credentials';

import { CharacterModal } from './modals/character/character.component'
import { SkillModal } from './modals/skill/skill.component'
import { PageModal } from './modals/page/page.component';
import { CharacterPotionsModal } from './modals/character-potions/character-potions.component';
import { PotionModal } from './modals/potion/potion.component';
import { SpellModal } from './modals/spell/spell.component';
import { CharacterSpellsModal } from './modals/character-spells/character-spells.component';
import { LoginModal } from './modals/login/login.component';
import { HelpModal } from './modals/help/help.component';

import { DataService } from './services/data.service'
import { PipesModule } from './pipes/pipes.module';

// Pages
import { HomePage } from './pages/home/home.page';
import { CharactersPage } from './pages/characters/characters.page';
import { PagesPage } from './pages/pages/pages.page';
import { SkillsPage } from './pages/skills/skills.page';
import { AssetsPage } from './pages/assets/assets.page';
import { SettingsPage } from './pages/settings/settings.page';

@NgModule({
	declarations: [
		AppComponent,
		HomePage,
		CharactersPage,
		PagesPage,
		CharacterModal,
		SkillsPage,
		AssetsPage,
		SettingsPage,

		SkillModal,
		PageModal,
		PotionModal,
		SpellModal,
		CharacterPotionsModal,
		CharacterSpellsModal,
		LoginModal,
		HelpModal
	],
	entryComponents: [
		HomePage,
		CharactersPage,
		PagesPage,
		CharacterModal,
		SkillsPage,
		AssetsPage,
		SettingsPage,
		
		SkillModal,
		PageModal,
		PotionModal,
		SpellModal,
		CharacterPotionsModal,
		CharacterSpellsModal,
		LoginModal,
		HelpModal
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		AngularFireModule.initializeApp(FirebaseConfig),
		AngularFirestoreModule,
		AngularFireAuthModule,
		PipesModule,
		FormsModule,
		ReactiveFormsModule
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
