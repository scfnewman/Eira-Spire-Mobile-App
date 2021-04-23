import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CharactersPage } from './pages/characters/characters.page';
import { HomePage } from './pages/home/home.page';
import { PagesPage } from './pages/pages/pages.page';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		component: HomePage
	},
	{
		path: 'characters',
		component: CharactersPage
	},
	{
		path: 'pages',
		component: PagesPage
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
