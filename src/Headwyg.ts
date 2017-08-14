import * as $ from 'jquery';
import './Headwyg.scss';

import {MouseListener} from "./MouseListener.ts";
import {KeyboardListener} from "./KeyboarderListener.ts";
import {Toolbar} from "./Toolbar.ts";

import {OnRootClick} from "./MouseHandlers/OnRootClick.ts";
import {OnClickOut} from './MouseHandlers/OnClickOut.ts';
import {OnCharClick} from "./MouseHandlers/OnCharClick.ts";
import {HighlightHandler} from "./MouseHandlers/HighlightHandler.ts";

import {OnGeneral} from "./KeyboardHandlers/OnGeneral.ts";
import {OnReturn} from "./KeyboardHandlers/OnReturn.ts";
import {OnBackspace} from "./KeyboardHandlers/OnBackspace.ts";
import {OnLeft} from "./KeyboardHandlers/OnLeft.ts";
import {OnRight} from "./KeyboardHandlers/OnRight.ts";
import {OnUp} from "./KeyboardHandlers/OnUp.ts";
import {OnDown} from "./KeyboardHandlers/OnDown.ts";
import {OnEnd} from "./KeyboardHandlers/OnEnd.ts";
import {OnHome} from "./KeyboardHandlers/OnHome.ts";
import {OnPageUp} from "./KeyboardHandlers/OnPageUp.ts";
import {OnPageDown} from "./KeyboardHandlers/OnPageDown.ts";
import {OnTab} from "./KeyboardHandlers/OnTab.ts";
import {OnImageClick} from "./MouseHandlers/OnImageClick.ts";
import {OnDelete} from "./KeyboardHandlers/OnDelete.ts";
import {ImageResizeHandler} from "./MouseHandlers/ImageResizeHandler.ts";

export class Headwyg{
	selector:string;

	constructor(selector:string){
		this.selector = selector;

		$(this.selector).addClass('headwyg-editor');

		MouseListener.Instance()
			.On('1', new OnClickOut())
			.On('1', new OnRootClick())
			.On('1', new OnCharClick())
			.On('1', new HighlightHandler())
			.On('1', new OnImageClick())
			.On('1', new ImageResizeHandler());

		KeyboardListener.Instance()
			.On('^[ -~]$', new OnGeneral())
			.On('Enter', new OnReturn())
			.On('Backspace', new OnBackspace())
			.On('ArrowLeft', new OnLeft())
			.On('ArrowRight', new OnRight())
			.On('ArrowDown', new OnDown())
			.On('ArrowUp', new OnUp())
			.On('End', new OnEnd())
			.On('Home', new OnHome())
			.On('PageUp', new OnPageUp())
			.On('PageDown', new OnPageDown())
			.On('Tab', new OnTab())
			.On('Delete', new OnDelete());

		let toolbar = new Toolbar();
	}
}