import * as $ from 'jquery';

import {KeyboardHandler} from "./KeyboardHandler";

export class KeyboardListener{

	private static instance:KeyboardListener;

	private events:{[event:string]:KeyboardHandler[]} = {};

	private constructor(){
		$(window).keydown(this._onKeyDown.bind(this));
	}
	public static Instance(){
		if(!this.instance) this.instance = new KeyboardListener;

		return this.instance;
	}

	public On(event:string, handler:KeyboardHandler){
		if(!(event in this.events)) this.events[event] = [];

		this.events[event].push(handler);

		return this;
	}
	public Off(event:string, handler:KeyboardHandler){
		if(event in this.events){
			this.events[event] = this.events[event].reduce(
				(handlers:KeyboardHandler[], current:KeyboardHandler) => current == handler ? handlers : [...handlers, current], []);
		}

		return this;
	}

	private _onKeyDown(e){
		let event:KeyboardHandler[] = Object.keys(this.events).reduce((evt:KeyboardHandler[], current:string) => {
			return e.key.match(new RegExp(current)) ? this.events[current] : evt
		}, []);

		event.forEach((handler:KeyboardHandler) => handler.onDown(e));
	}
}