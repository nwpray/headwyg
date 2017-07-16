import * as $ from 'jquery';

export class Caret{
	public static isActive(){
		return this.Element().length > 0;
	}

	public static Element(){
		return $('.caret');
	}
	public static Line(){
		return this.Element().closest('.line');
	}

	public static Deactivate(){
		if(!this.isActive()) return;

		//Get the current line
		let line = this.Line();

		//Remove the caret
		this.Element().remove();

		//If the line was empty remove the line as well
		if(line.children('span').length < 1)
			line.remove();
	}

	public static WriteChar(char:string){
		if(!this.isActive()) return;

		let element = $(`<span class="char">${char}</span>`);
		element.css(this.GetStyles());

		this.Element().before(element);
	}
	public static Backspace(count: number){
		if(!this.isActive()) return;

		while(count > 0){
			let prev = this.Element().prev('.char');

			if(prev.length < 1){
				let line = this.Line();
				let prev = line.prev('.line');

				if(prev.children().length > 0){
					Caret.PlaceAfter(prev.children().last());

					prev.append(line.children());

					line.remove();
				}

				return;
			}

			prev.remove();
			count--;
		}
	}
	public static AddImage(url:string){
		if(!this.isActive()) return;

		this.NewLine();

		this.Element().replaceWith(this.ImageView(url));
	}

	public static NewLine(){
		if(!this.isActive()) return;

		if(this.Line().children('.char').length < 1 && this.Line().children('img').length < 1) return;

		let line = this.Line();
		let lineChildren = line.children();
		let index = Caret.Element().index();

		this.Deactivate();

		let newLine = $(this.LineView(this.CaretView()));

		line.html(lineChildren.slice(0, index));
		newLine.html(lineChildren.slice(index));
		line.after(newLine);
	}

	public static PlaceBefore(element:any, multiselect:boolean = false){
		if(!multiselect)
			this.Deactivate();

		$(element).before(this.CaretView());
	}
	public static PlaceAfter(element:any,  multiselect:boolean = false){
		if(!multiselect)
			this.Deactivate();

		$(element).after(this.CaretView());
	}
	public static PlaceWithin(element:any,  multiselect:boolean = false){
		if(!multiselect)
			this.Deactivate();

		$(element).prepend(this.CaretView());
	}

	public static CaretView(contents = undefined){
		let caret = $('<span class="caret"></span>');
		caret.css(this.GetStyles());

		if(contents)
			caret.html(contents);

		return caret;
	}
	public static LineView(contents = undefined){
		let line = $('<p class="line"></p>');

		if(contents)
			line.html(contents);

		return line;
	}
	public static ImageView(url){
		return $(`
			<div class="img-wrap">
				<img src="${url}"/>
				<span class="handle bottom-right"></span>
			</div>
		`);
	}

	public static ClearSelected(){
		$('.selected').removeClass('selected');
	}

	public static GetStyles(){
		return {
			'font-size' : $('.headwyg-toolbar #font-size').val() + $('.headwyg-toolbar #font-scale').val(),
			'font-family' : $('.headwyg-toolbar #font-family').val(),
			'font-weight' : $('#bold').hasClass('on') ? 'bold' : 'normal',
			'font-style' : $('#italic').hasClass('on') ? 'italic' : 'normal',
			'text-decoration' : $('#underline').hasClass('on') ? 'underline' : 'none'
		};
	}
}