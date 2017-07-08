import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnDown extends KeyboardHandler{
	onDown(e){
		let nextLineChildren = Caret.Line().next('.line').children('.char');

		if($(nextLineChildren).length < 1){
			Caret.PlaceAfter(Caret.Line().children('.char').last())
		}
		else{
			let index = Caret.Element().prev('.char').index();

			if(index >= nextLineChildren.length){
				Caret.PlaceAfter(nextLineChildren.last());
			}
			else if(index > -1){
				Caret.PlaceAfter(nextLineChildren[index]);
			}
			else{
				Caret.PlaceBefore(nextLineChildren.first());
			}
		}
	}
}