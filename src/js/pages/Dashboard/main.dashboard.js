import { dashTopbar } from './components/dash_topbar';
import dashSidebar from './components/dash_sidebar';
import displayWindowSize from '../../components/_window';

class Dashboard {
	constructor() {}

	renderLayouts() {
		dashTopbar();
		dashSidebar();
		displayWindowSize();
	}
}

export default Dashboard;
