import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnLeft extends KeyboardHandler{
	onDown(e){
		let prev = Caret.Element().prev('.char');
		if(prev.length > 0)
			Caret.PlaceBefore(prev);
	}
}