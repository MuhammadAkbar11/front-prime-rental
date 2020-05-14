export const loadDataSidebar = () => {
	let dataSidebar = '';
	const sectionsidebar = document.querySelector('.sidebar');

	dataSidebar += SidebarContent;
	console.log(dataSidebar);

	sectionsidebar.innerHTML = SidebarContent;
};
