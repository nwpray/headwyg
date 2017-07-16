import * as $ from 'jquery';

import {MouseHandler} from "../MouseHandler.ts";

import {Caret} from "../Caret.ts";

export class OnImageClick extends MouseHandler{
	onClick(e){
		if($(e.target).hasClass('handler')){

		}
		else if($(e.target).hasClass('img-wrap')){
			$(e.target).toggleClass("selected");
		}
		else if($(e.target).closest('.img-wrap').length > 0){
			$(e.target).closest('.img-wrap').toggleClass('selected');
			e.stopPropagation();
		}
	}
}