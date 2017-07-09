import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnBackspace extends KeyboardHandler{
	onDown(e){
		let selected = $('.char.selected');
		if(selected.length < 1){
			if(e.shiftKey)
				Caret.Line().remove();
			else
				Caret.Backspace(1);
		}
		else{
			$(selected).remove();
		}
	}
}