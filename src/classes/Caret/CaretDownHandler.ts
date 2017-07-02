import { KeyboardEventHandler } from '../KeyboardEventHandler.ts';

export class CaretDownHandler extends KeyboardEventHandler{
	onDown(e){
		console.log("Caret Down");
	}
}