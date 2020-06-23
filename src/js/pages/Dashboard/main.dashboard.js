import { dashTopbar } from './components/dash_topbar';
import dashSidebar from './components/dash_sidebar';
import displayWindowSize from '../../components/_window';
import DashboardTransaksi from './transaksi.dashboard';

class Dashboard {
	renderLayouts() {
		displayWindowSize();
		$('[data-toggle="tooltip"]').tooltip();
		dashTopbar();
		dashSidebar();

		new DashboardTransaksi().render();
	}
}

export default Dashboard;
