import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnReturn extends KeyboardHandler{
	onDown(e){
		if(e.shiftKey)
			Caret.WriteChar("\n");
		else
			Caret.NewLine();
	}
}