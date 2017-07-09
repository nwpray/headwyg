import * as $ from 'jquery';

import {MouseHandler} from "../MouseHandler.ts";

import {Caret} from "../Caret.ts";

export class HighlightHandler extends MouseHandler{
	onDown(e){
		if(!e.shiftKey)
			$('.selected').removeClass('selected');
	}
	onUp(e){
		console.log($('.selected'));
	}
	onMove(e){
		if($(e.target).hasClass('char'))''
			$(e.target).addClass('selected');
	}
}