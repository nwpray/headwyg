import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnUp extends KeyboardHandler{
	onDown(e){
		let prevLineChildren = Caret.Line().prev('.line').children('.char');

		if($(prevLineChildren).length < 1){
			Caret.PlaceBefore(Caret.Line().children('.char').first())
		}
		else{
			let index = Caret.Element().prev('.char').index();

			if(index >= prevLineChildren.length){
				Caret.PlaceAfter(prevLineChildren.last());
			}
			else if(index > -1){
				Caret.PlaceAfter(prevLineChildren[index]);
			}
			else{
				Caret.PlaceBefore(prevLineChildren.first());
			}
		}
	}
}