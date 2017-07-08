import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnRight extends KeyboardHandler{
	onDown(e){
		let next = Caret.Element().next('.char');
		if(next.length > 0)
			Caret.PlaceAfter(next);
	}
}