import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'character'
})
export class CharacterPipe implements PipeTransform {

	transform(value: any, ...args: any[]): any {

		return null;
	}

}
