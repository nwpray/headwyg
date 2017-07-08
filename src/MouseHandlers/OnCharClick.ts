import * as $ from 'jquery';

import {MouseHandler} from "../MouseHandler.ts";

import {Caret} from "../Caret.ts";

export class OnCharClick extends MouseHandler{
	onClick(e){
		if(!$(e.target).hasClass('char')) return;

		let pWidth = $(e.target).innerWidth(); //use .outerWidth() if you want borders
		let pOffset = $(e.target).offset();
		let x = e.pageX - pOffset.left;

		if(pWidth/2 > x)
			Caret.PlaceBefore(e.target, e.altKey);
		else
			Caret.PlaceAfter(e.target, e.altKey);
	}
}