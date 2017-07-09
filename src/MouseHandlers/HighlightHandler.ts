import * as $ from 'jquery';

import {MouseHandler} from "../MouseHandler.ts";

import {Caret} from "../Caret.ts";

export class HighlightHandler extends MouseHandler{
	onDown(e){
		if(!e.shiftKey && $(e.target).closest('.headwyg-toolbar').length < 1)
			$('.selected').removeClass('selected');
	}
	onUp(e){
	}
	onMove(e){
		if($(e.target).hasClass('char'))''
			$(e.target).addClass('selected');
	}
}