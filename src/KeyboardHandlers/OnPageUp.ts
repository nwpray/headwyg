import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnPageUp extends KeyboardHandler{
	onDown(e){
		Caret.PlaceBefore($('.headwyg-editor').children('.line').first().children('.char').first());
	}
}