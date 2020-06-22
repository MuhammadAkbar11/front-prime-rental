import { dashTopbar } from './components/dash_topbar';
import dashSidebar from './components/dash_sidebar';
import displayWindowSize from '../../components/_window';
import DashboardTransaksi from './transaksi.dashboard';

class Dashboard {
	constructor() {}

	renderLayouts() {
		$('[data-toggle="tooltip"]').tooltip();
		dashTopbar();
		dashSidebar();
		displayWindowSize();

		new DashboardTransaksi().render();
	}
}

export default Dashboard;
