import { Component } from '@angular/core';
import { NaTableConfig } from 'natrium-lib';

@Component({
	selector: 'app-nalib-table',
	templateUrl: './nalib-table.component.html',
	styleUrls: ['./nalib-table.component.scss']
})
export class NalibTableComponent {
	
	config: NaTableConfig;
	data: any;

	constructor() {
		this.data = [{
			nickname: "lennon",
			age: 30,
			time: new Date().getTime()
		}, {
			nickname: "mos",
			age: 28,
			time: new Date().getTime()
		}, {
			nickname: "james",
			age: 38,
			time: new Date().getTime()
		}];
		this.config = new NaTableConfig(this)
			.setTitle("用户列表")
			.needMultiSelect(true)
			.needShowIndex(true)
			.setConfig([{
				name: "nickname",
				label: "昵称"
			}, {
				name: "age",
				label: "年龄"
			}, {
				name: "time",
				label: "时间"
			}])
			.setSingleSelectActions([{
				callback: this.edit,
				btnText: "编辑"
			}, {
				callback: this.detail,
				btnText: "详情"
			}])
			.setNormalActions([{
				callback: this.add,
				btnText: "添加用户",
				btnIcon: "ion-ios-add",
				btnStyleCss: "is-small is-info"
			}])
			.setMultiSelectActions([{
				callback: this.delete,
				btnText: "删除"
			}])
			.setPaginationConfig({
				currentPage: 0,
				totalPage: 100,
				maxLength: 9,
				onPageChange: this.onPageChange
			})
	}

	edit(index: number): void {
		console.log(index);
	}

	detail(index: number): void {
		console.log(index);
	}

	add(): void {
		console.log("add")
	}

	delete(indexs: Array<number>) {
		console.log(indexs);
	}

	onPageChange(page: number) {
		console.log(page);
	}

}
