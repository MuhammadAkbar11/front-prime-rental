class InboxDashboard {
	constructor() {
		this.cardInbox = document.querySelector('.inbox--card');
	}

	render() {
		this.handleSortTitleMessage();
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
	}
}

export default InboxDashboard;
