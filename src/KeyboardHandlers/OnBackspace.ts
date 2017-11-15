import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnBackspace extends KeyboardHandler{
	onDown(e){
		let selected = $('.selected');

		if(selected.length < 1)
			Caret.Backspace(1);
		else {
			let parent = $(selected).closest('.line');
			$(selected).remove();
			if($(parent).html() === '')
				parent.html(Caret.CaretView());
		}
	}
}