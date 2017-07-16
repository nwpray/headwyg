import * as $ from 'jquery';

import {Caret} from "../Caret.ts";

import {KeyboardHandler} from "../KeyboardHandler.ts";

export class OnHome extends KeyboardHandler{
	onDown(e){
		Caret.ClearSelected();

		let index = Caret.Element().prev('.char').index();
		Caret.Line().find('.char').slice(0, index + 1).addClass('selected');

		Caret.PlaceBefore(Caret.Line().children('.char').first());
	}
}