import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnBackspace extends KeyboardHandler{
	onDown(e){
		if(e.shiftKey)
			Caret.Line().remove();
		else
			Caret.Backspace(1);
	}
}