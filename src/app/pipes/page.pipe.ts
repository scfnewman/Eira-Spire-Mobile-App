import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'Page'
})
export class PagePipe implements PipeTransform {

	transform(Pages: any[], Category: string): any {
		if(!Pages) return null;

		return Pages.filter(Page => {
			if(Page.Category == Category) return Page;
		});
	}

}
