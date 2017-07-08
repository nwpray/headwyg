import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnPageDown extends KeyboardHandler{
	onDown(e){
		Caret.PlaceAfter($('.headwyg-editor').children('.line').last().children('.char').last());
	}
}