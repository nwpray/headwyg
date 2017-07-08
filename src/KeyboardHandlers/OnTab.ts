import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnTab extends KeyboardHandler{
	onDown(e){
		e.preventDefault();
		Caret.WriteChar("\t");
	}
}