import * as $ from 'jquery';

import {Caret} from './Caret.ts';

export class Toolbar{
	constructor(){
		$('.headwyg-editor').after(this.ToolBarView());
	}

	ToolBarView(){
		let toolbar = $(`<div class="headwyg-toolbar"></div>`);

		let fontSize = $('<select id="font-size" class="item"></select>');
		[0.67, 0.83, 1, 1.17, 1.5, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
			.forEach((size) => fontSize.append(`<option value="${size}">${size}</option>`));
		toolbar.append(fontSize);
		$(fontSize).val(1);

		$(fontSize).on('change', this.UpdateStyles);

		let fontScale = $('<select id="font-scale" class="item"></select>');
		['pt', 'px', 'em', 'rem']
			.forEach((scale) => fontScale.append(`<option value="${scale}">${scale}</option>`));
		toolbar.append(fontScale);
		$(fontScale).val('em');

		$(fontScale).on('change', this.UpdateStyles);

		let fontSelector = $('<select id="font-family" class="item"></select>');

		this.ReadFonts().forEach((font) =>
			fontSelector.append(`<option value="'${font.family}',${font.generic}">${font.family}</option>`));

		toolbar.append(fontSelector);
		$(fontSelector).on('change', this.UpdateStyles);

		let addImageInput = $('<input id="add-image-input" type="file" accept="image/*"/>')
			.change((e) => {
				if(e.target.files.length > 0){
					this.Base64Encode(e.target.files[0], (result, error) =>{
						if(error){
							return;
						}

						Caret.AddImage(result);

						$(e.target).val("");
					});
				}
			});
		let addImageButton = $('<button class="item">Image</button>')
			.click(() => $(addImageInput).trigger('click'));

		$('.headwyg-toolbar').append(addImageInput);
		toolbar.append(addImageButton);

		let bold = $('<button id="bold" class="decoration item"><strong>B</strong></button>');
		$(bold).click(() => {
			$(bold).toggleClass('on');
			this.UpdateStyles();
		});
		toolbar.append(bold);

		let italic = $('<button id="italic" class="decoration item"><em>I</em></button>');
		$(italic).click(() => {
			$(italic).toggleClass('on');
			this.UpdateStyles();
		});
		toolbar.append(italic);

		let underline = $('<button id="underline" class="decoration item"><u>U</u></button>');
		$(underline).click(() => {
			$(underline).toggleClass('on');
			this.UpdateStyles();
		});
		toolbar.append(underline);

		return toolbar;
	}
	UpdateStyles(){
		$('.char.selected').css(Caret.GetStyles());
		$('.caret').css(Caret.GetStyles());
	}
	UnpackStyles(element){
		let styles = $(element).attr('style').split(';');
		return styles.reduce((obj, current) => {
			let parts = current.split(':').map((part) => part.trim());
			obj[parts[0]] = parts[1];
			return obj;
		}, {});
	}
	ReadFonts(){
		let fonts = [];

		$('[headwyg-fonts]').each((index, element) => {
			$(element).attr('headwyg-fonts').split(',')
				.reduce((processed, font) => {
					let matches = font.match('([^:]+):(.*)');
					let familyIndex = 1, genericIndex = 2;
					if(matches) processed.push({family:matches[familyIndex],generic:matches[genericIndex]});
					return processed;
				}, [])
				.forEach((font) => fonts.push(font));
		});

		return fonts;
	}
	Base64Encode(file, callback){
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			callback(reader.result);
		};
		reader.onerror = function (error) {
			callback(undefined, error);
		};
	}
}