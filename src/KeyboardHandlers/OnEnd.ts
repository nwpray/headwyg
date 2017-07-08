import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnEnd extends KeyboardHandler{
	onDown(e){
		Caret.PlaceAfter(Caret.Line().children('.char').last());
	}
}