import * as $ from 'jquery';
import { MouseHandler } from './MouseHandler.ts';

export class MouseListener{

	private static instance:MouseListener;

	private events:{[event:string]:MouseHandler[]} = {};

	private constructor(){
		$(window).click(this._onWindowClick.bind(this));
	}
	public static Instance(){
		if(!this.instance) this.instance = new MouseListener;

		return this.instance;
	}

	public On(event:string, handler:MouseHandler){
		if(!(event in this.events)) this.events[event] = [];

		this.events[event].push(handler);

		return this;
	}
	public Off(event:string, handler:MouseHandler){
		if(event in this.events){
			this.events[event] = this.events[event].reduce(
				(handlers:MouseHandler[], current:MouseHandler) => current == handler ? handlers : [...handlers, current], []);
		}

		return this;
	}

	private _onWindowClick(e){
		if(e.which.toString() in this.events)
			this.events[e.which].forEach((handler:MouseHandler) => handler.onClick(e));
	}
}