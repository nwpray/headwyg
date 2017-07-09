import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnGeneral extends KeyboardHandler{
	onDown(e){

		let selected = $('.char.selected');
		if(selected.length > 0){
			Caret.PlaceBefore(selected.first());
			selected.remove();
		}

		switch(e.key){
			case ' ':
				Caret.WriteChar(' ');
				break;
			default:
				Caret.WriteChar(e.key);
				break;
		}

	}
}