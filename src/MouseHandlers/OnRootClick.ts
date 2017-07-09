import * as $ from 'jquery';

import {Caret} from '../Caret.ts';
import {MouseHandler} from "../MouseHandler.ts";

export class OnRootClick extends MouseHandler{
	onClick(e){
		if($(e.target).hasClass('headwyg-editor')){
			if($(e.target).html().trim() === ""){
				$(e.target).append(Caret.LineView(Caret.CaretView()));
			}
		}
	}
}