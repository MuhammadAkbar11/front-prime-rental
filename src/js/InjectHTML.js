export default class InjectHtml {
	constructor(selector, content) {
		this.selector = document.querySelector(selector);
		this.content = content;
		this.data;
	}

	inject() {
		this.data = '';
		this.data += this.content;
		this.selector.innerHTML = this.data;
	}
}
