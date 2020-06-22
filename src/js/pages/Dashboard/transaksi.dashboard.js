class DashboardTransaksi {
	constructor() {
		this.actionsInvoice = document.querySelector('.actions-invoice');
		this.statusActionsInvoice = false;
	}

	render() {
		if (this.actionsInvoice) {
			this.actionsInvoice.addEventListener(
				'click',
				this.toggleDropdownActionsInvoice
			);
		}
	}

	toggleDropdownActionsInvoice(e) {
		e.preventDefault();

		const parent = e.target.parentNode || e.target;

		const theAngle = parent.children['2'];

		if (parent.classList.contains('actions-invoice')) {
			if (this.statusActionsInvoice == false) {
				theAngle.classList.replace('fa-angle-down', 'fa-angle-up');

				$('#dropdown-menu-actionsInvoice').dropdown('show');
				// console.log(theAngle);

				this.statusActionsInvoice = true;
			} else {
				theAngle.classList.replace('fa-angle-up', 'fa-angle-down');
				$('#dropdown-menu-actionsInvoice').dropdown('hide');
				this.statusActionsInvoice = false;
			}
		}
	}
}

export default DashboardTransaksi;
