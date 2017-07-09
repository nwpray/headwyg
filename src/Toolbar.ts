import * as $ from 'jquery';

import {Caret} from './Caret.ts';

export class Toolbar{
	constructor(){
		$('.headwyg-editor').after(this.ToolBarView());
	}

	ToolBarView(){
		let toolbar = $(`<div class="headwyg-toolbar"></div>`);

		let fontSize = $('<select id="font-size"></select>');
		[0.67, 0.83, 1, 1.17, 1.5, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
			.forEach((size) => fontSize.append(`<option value="${size}">${size}</option>`));
		toolbar.append(fontSize);
		$(fontSize).val(1);

		$(fontSize).on('change', this.UpdateStyles);

		let fontScale = $('<select id="font-scale"></select>');
		['pt', 'px', 'em', 'rem']
			.forEach((scale) => fontScale.append(`<option value="${scale}">${scale}</option>`));
		toolbar.append(fontScale);
		$(fontScale).val('em');

		$(fontScale).on('change', this.UpdateStyles);

		return toolbar;
	}
	UpdateStyles(){
		$('.char.selected').css(Caret.GetStyles());
		$('.caret').css(Caret.GetStyles());
	}
	UnpackStyles(element){
		let styles = $(element).attr('style').split(';');
		return styles.reduce((obj, current) => {
			let parts = current.split(':').map((part) => part.trim());
			obj[parts[0]] = parts[1];
			return obj;
		}, {});
	}
}