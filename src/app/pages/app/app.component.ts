import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	showInMobile: boolean;

	menu: Array<MenuItemConfig>;

	constructor() {
		this.showInMobile = true;
		this.menu = [{
			title: "Overview",
			items: [{
				name: "Project Natrium",
				url: "main"
			}, {
				name: "Natrium Lib 简介",
				url: "overview-docs/natrium-lib-intro"
			}]
		}, {
		// 	title: "Bulma 组件集",
		// 	items: [{
		// 		name: "Button",
		// 		url: "bulma-component-docs/button"
		// 	}]
		// }, {
		// 	title: "Bulma Extensions 组件集",
		// 	items: [{
		// 		name: "Divider",
		// 		url: "bulma-extensions-component-docs/divider"
		// 	}]
		// }, {
			title: "Natrium Lib组件集",
			items: [{
				name: "NaTable",
				url: "natrium-lib-docs/na-table"
			}, {
				name: "NaForm",
				url: "natrium-lib-docs/na-form"
			}, {
				name: "NaDetailEditor",
				url: "natrium-lib-docs/na-detail-editor"
			}, {
				name: "NaComponentHost",
				url: "natrium-lib-docs/na-component-host"
			}, {
				name: "NaOutlet",
				url: "natrium-lib-docs/na-outlet"
			}, {
				name: "NaPagination",
				url: "natrium-lib-docs/na-pagination"
			}]
		}];
	}
}

type MenuItemConfig = {
	title: string;

	items: Array<{
		name: string,
		url?: string,
		subitems?: Array<{
			name: string,
			url: string,
		}>
	}>
}

