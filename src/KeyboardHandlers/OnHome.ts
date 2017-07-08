import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnHome extends KeyboardHandler{
	onDown(e){
		Caret.PlaceBefore(Caret.Line().children('.char').first());
	}
}