import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'Character'
})
export class CharacterPipe implements PipeTransform {

	transform(Characters: any[], Filter?): any {
		if(!Characters) return null;

		Characters = Characters.filter(Character => {

			if(Filter == "Fallen Heroes")
			{
				if(!Character.Alive) return Character;
			}

			if(Filter == "Retired")
			{
				if(Character.Retired) return Character;
			}

			if(Filter == "Members")
			{
				if(Character.Rank < 5 && Character.Alive) return Character;
			}

			if(Filter == "Associates")
			{
				if(Character.Rank >= 5 && Character.Alive) return Character;
			}
		})

		Characters = Characters.sort((a, b) => {
			return (a.Rank - b.Rank);
		});

		return Characters;
	}

}
