import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'Character'
})
export class CharacterPipe implements PipeTransform {

	transform(Characters: any[], Filter?): any {
		if (!Characters) return null;

		Characters = Characters.filter(Character => {

			if (Filter.page == "Fallen Heroes") {
				if (!Character.Alive) return Character;
			}

			if (Filter.page == "Retired") {
				if (Character.Retired) return Character;
			}

			if (Filter.page == "Members") {
				if (Character.Rank < 5 && Character.Alive) return Character;
			}

			if (Filter.page == "Associates") {
				if (Character.Rank >= 5 && Character.Alive) return Character;
			}
		})

		if (Filter.search) {
			Characters = Characters.filter(Character => {
				let Search = Filter.search.toLowerCase();
				let ToSearch = (Character.FirstName + " " + Character.LastName + " " + Character.Identity + " " + Character.EarnedName + " " + Character.Lineage + " " + Character.Virtue + " " + Character.Gender).toLowerCase();

				if (ToSearch.includes(Search)) return Character;
			})
		}

		Characters = Characters.sort((a, b) => {
			return (a.Rank - b.Rank);
		});

		return Characters;
	}

}
