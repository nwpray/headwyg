import * as $ from 'jquery';
import { KeyboardEventHandler } from './KeyboardEventHandler.ts';

export class KeyboardHandler{
	private static instance: KeyboardHandler;
	private events: {[event:string]:KeyboardEventHandler[]} = {};

	private constructor(){
		$(document)
			.keydown(this._onKeyDown.bind(this))
			.keyup(this._onKeyUp.bind(this))
			.keypress(this._onKeyPress.bind(this));
	};

	public static Instance(){
		if(!this.instance) this.instance = new KeyboardHandler();

		return this.instance;
	}

	public On(event:string, handler: KeyboardEventHandler){
		if(!(event in this.events)) this.events[event] = [];

		this.events[event].push(handler);

		return this;
	}
	public Off(event:string, handler: KeyboardEventHandler){
		if(!(event in this.events)) return;

		this.events[event] = this.events[event]
			.reduce((handlers, current) => current === handler ? [...handlers, current] : handlers, []);

		return this;
	}

	private _onKeyDown(e){
		if(e.key in this.events)
			this.events[e.key].forEach((handler) => handler.onDown(e));
	}
	private _onKeyUp(e){
		if(e.key in this.events)
			this.events[e.key].forEach((handler) => handler.onUp(e));
	}
	private _onKeyPress(e){
		if(e.key in this.events)
			this.events[e.key].forEach((handler) => handler.onPress(e));
	}
}