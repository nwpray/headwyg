import { KeyboardEventHandler } from '../KeyboardEventHandler.ts';

export class CaretLeftHandler extends KeyboardEventHandler{
	onDown(e){
		console.log("Caret Left");
	}
}