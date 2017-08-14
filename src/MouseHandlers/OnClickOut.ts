import * as $ from 'jquery';

import {MouseHandler} from "../MouseHandler.ts";

import {Caret} from "../Caret.ts";

export class OnClickOut extends MouseHandler{
	onClick(e){
		if($(e.target).closest('.headwyg-toolbar').length < 1) Caret.Deactivate();
		//If the caret is not active, shortcut out
		/*if(!Caret.isActive()) return;

		if($(e.target).closest('.headwyg-editor').length < 1 && $(e.target).closest('.headwyg-toolbar').length < 1){
			Caret.Deactivate();
		}*/
	}
}