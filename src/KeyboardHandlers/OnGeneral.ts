import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnGeneral extends KeyboardHandler{
	onDown(e){
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