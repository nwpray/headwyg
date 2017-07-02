import { KeyboardEventHandler } from '../KeyboardEventHandler.ts';

export class CaretRightHandler extends KeyboardEventHandler{
	onDown(e){
		console.log("Caret Right");
	}
}