function expandNav() {
	// Get elements
	var navbar = document.getElementById("navbar");
	var title = document.getElementById("navbar-title");

	// Navbar
	if (navbar.className === "topnav") {
		navbar.className += " responsive";
	} else {
		navbar.className = "topnav";
	}

	// Title
	if (title.className === "topnav") {
		title.className += " responsive";
	} else {
		title.className = "topnav";
	}
}
