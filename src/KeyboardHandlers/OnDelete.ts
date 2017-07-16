import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnDelete extends KeyboardHandler{
	onDown(e){
		if(Caret.isActive() && e.shiftKey)
			Caret.Line().remove();

		let selected = $('.selected');

		selected.each(function(i){
			if($(selected[i]).hasClass('img-wrap')){
				$(selected[i]).closest('.line').remove();
			}
		});
	}
}