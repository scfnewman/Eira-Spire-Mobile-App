import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'Page'
})
export class PagePipe implements PipeTransform {

	transform(Pages: any[], Filter?): any {
		if(!Pages) return null;

		Pages = Pages.filter(Page => {
			if(!Page.WIP)
				if(Filter.category == Page.Category) return Page;
		});

		if (Filter.search) {
			Pages = Pages.filter(Page => {
				let Search = Filter.search.toLowerCase();
				let ToSearch = (Page.Title + " " + Page.Subtitle + " " + Page.Author).toLowerCase();

				if (ToSearch.includes(Search)) return Page;
			})
		}

		Pages = Pages.sort((a,b) => {
			if(a.Title > b.Title) return 1;
			else return -1;
		});

		return Pages
	}

}
