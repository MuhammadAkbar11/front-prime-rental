import {
	minimizeDashboardSidebar,
	_notMinimizeDasoboardSidebar,
} from '../pages/Dashboard/components/dash_sidebar';

const displayWindowSize = () => {
	const windowWidth = document.documentElement.clientWidth;

	if (windowWidth < 768) {
		minimizeDashboardSidebar();
	} else {
		_notMinimizeDasoboardSidebar();
	}
	return windowWidth;
};

window.addEventListener('resize', displayWindowSize);

export default displayWindowSize;
