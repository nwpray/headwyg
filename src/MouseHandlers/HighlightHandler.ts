import * as $ from 'jquery';

import {MouseHandler} from "../MouseHandler.ts";

import {Caret} from "../Caret.ts";

export class HighlightHandler extends MouseHandler{
	private static last:any;

	onDown(e){
		if(!e.shiftKey && $(e.target).closest('.headwyg-toolbar').length < 1) {
			HighlightHandler.last = null;
			$('.selected').removeClass('selected');
		}
	}
	onUp(e){
	}
	onMove(e){
		if(!$(e.target).hasClass('char')) return;

		$(e.target).addClass('selected');

		if($(HighlightHandler.last).closest('.line')[0] == $(e.target).closest('.line')[0]){
			let lastIndex = $(HighlightHandler.last).index();
			let targetIndex = $(e.target).index();

			let high = lastIndex > targetIndex ? lastIndex : targetIndex;
			let low = lastIndex < targetIndex ? lastIndex : targetIndex;

			let siblings = $(e.target).closest('.line').find('.char');

			for(let i = low; i < high; i++){
				$(siblings[i]).addClass('selected');
			}

			if(targetIndex > lastIndex) Caret.PlaceAfter(e.target);
			else if(targetIndex < lastIndex) Caret.PlaceBefore(e.target);
		}

		HighlightHandler.last = e.target;
	}
}