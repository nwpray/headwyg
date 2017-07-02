import { KeyboardEventHandler } from '../KeyboardEventHandler.ts';

export class CaretUpHandler extends KeyboardEventHandler{
	onDown(e){
		console.log("Caret Up");
	}
}