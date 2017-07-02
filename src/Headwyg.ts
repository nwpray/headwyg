import * as $ from 'jquery';

import { IHeadwygConfig } from './interfaces/IHeadwygConfig.ts';
import { KeyboardHandler } from './classes/KeyboardHandler.ts';

import { CaretUpHandler } from './classes/Caret/CaretUpHandler.ts';
import { CaretDownHandler } from "./classes/Caret/CaretDownHandler.ts";
import { CaretLeftHandler } from "./classes/Caret/CaretLeftHandler.ts";
import { CaretRightHandler } from "./classes/Caret/CaretRightHandler.ts";

import "./styles/headwyg.scss";

export default class Headwyg{

	selector: string;

	constructor(selector: string, config: IHeadwygConfig){
		this.selector = selector;

		$(this.selector).html(`<div class="headwyg-editor"></div>`);

		KeyboardHandler.Instance()
			.On('ArrowUp', new CaretUpHandler())
			.On('ArrowDown', new CaretDownHandler())
			.On('ArrowRight', new CaretRightHandler())
			.On('ArrowLeft', new CaretLeftHandler());
	}
}