import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'Skill'
})
export class SkillPipe implements PipeTransform {

	transform(Skills: any, Filter?): any {
		if (!Skills) return null;

		if (Filter.search) {
			Skills = Skills.filter(Skill => {
				let Search = Filter.search.toLowerCase();
				let ToSearch = (Skill.Name + " " + Skill.Category + (Skill.Form ? " " + Skill.Form: '')).toLowerCase();

				if (ToSearch.includes(Search)) return Skill;
			})
		}

		return Skills;
	}

}
