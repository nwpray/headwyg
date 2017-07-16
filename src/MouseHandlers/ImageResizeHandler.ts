import * as $ from 'jquery';

import {MouseHandler} from "../MouseHandler.ts";

import {Caret} from "../Caret.ts";

export class ImageResizeHandler extends MouseHandler{
	selected = undefined;
	pos: {x: 0, y:0};

	onDown(e){
		if($(e.target).hasClass('handle')) {
			this.selected = e.target;
			this.pos = {x: e.pageX, y: e.pageY};
		}
	}
	onUp(e){
		this.selected = undefined;
	}
	onMove(e){
		if(this.selected){
			let last = this.pos;
			let current = {x: e.pageX, y: e.pageY};
			let img = $(this.selected).closest('.img-wrap').find('img');

			let width = $(img).width();
			let height = $(img).height();
			let ratio = height/width;

			let newWidth = width - (last.x - current.x);
			let newHeight = ratio * newWidth;
			$(img).width(newWidth).height(newHeight);

			this.pos = current;
		}
	}
}