// Get elements
const sidebar = document.getElementById("sidebar");
const topnav = document.getElementById("topnav");

function toggleSidebar() {
	if (sidebar.classList.contains("shown")) {
		// Hide sidebar
		sidebar.classList.remove("shown");
		topnav.classList.remove("sidebar-shown");
	} else {
		// Show sidebar
		sidebar.classList.add("shown");
		topnav.classList.add("sidebar-shown");
	}
}
