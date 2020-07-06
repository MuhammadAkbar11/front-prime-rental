class InboxDashboard {
	constructor() {
		this.cardInbox = document.querySelector('.inbox--card');
	}

	render() {
		this.handleSortTitleMessage();
	}

	loadArrayTextTitle() {
		const cardInbox = this.cardInbox;
		return new Promise((resolve) => {
			if (this.cardInbox) {
				const titleMessage = cardInbox.getElementsByClassName(
					'message-subject'
				);
				[...titleMessage].map((title) => {
					const data = {};

					let titleText = title.textContent
						.replace(/\s+/g, ' ')
						.replace(/(\r\n|\n|\r)/gm, ' ');
					data.arrayText = titleText.split(' ');
					data.lengthChar = data.arrayText.join('').length;
					data.content = title;
					resolve(data);
				});
			}
		});
	}

	handleSortTitleMessage() {
		const cardInbox = this.cardInbox;

		if (this.cardInbox) {
			const titleMessage = cardInbox.getElementsByClassName('message-subject');
			[...titleMessage].map((title) => {
				let titleText = title.textContent
					.replace(/\s+/g, ' ')
					.replace(/(\r\n|\n|\r)/gm, ' ');
				const arrayText = titleText.split(' ');
				const lengthChar = arrayText.join('').length;

				let sortText;

				sortText = arrayText.splice(0, 12).join(' ');

				title.innerHTML = `${sortText} ...`;
			});
		}

		// this.title.innerHTML = `${sortText} ...`;
	}
}

export default InboxDashboard;
