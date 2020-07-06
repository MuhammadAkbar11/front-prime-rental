import { dashTopbar } from './components/dash_topbar';
import dashSidebar from './components/dash_sidebar';
import displayWindowSize from '../../components/_window';
import DashboardTransaksi from './transaksi.dashboard';

import 'dropify';

class Dashboard {
	renderLayouts() {
		displayWindowSize();
		$('[data-toggle="tooltip"]').tooltip();

		const userPhoto = document.querySelector('#user_photo');

		if (userPhoto) {
			$('#user_photo').dropify({
				messages: {
					'default': 'Silahkan seret atau klik untuk upload gambar',
					'replace': 'Silahkan seret atau klik untuk upload gambar',
					'remove': 'Remove',
					'error': 'Ooops, something wrong happended.',
				},
			});
		}

		dashTopbar();
		dashSidebar();

		new DashboardTransaksi().render();
	}
}

export default Dashboard;
