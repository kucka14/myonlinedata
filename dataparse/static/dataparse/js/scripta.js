
function slide(direction) {
	var topLeft = document.querySelector(".top-left"); 
	var slideButton1 = document.querySelector(".expand-icon-1");
	var slideButton2 = document.querySelector(".expand-icon-2");
	if (direction == 'right') {
		topLeft.style.display = 'flex';
		slideButton1.removeAttribute('style');
		slideButton2.removeAttribute('style');
	} else {              
		topLeft.style.display = 'none';
		slideButton1.style.display = 'none';
		slideButton2.style.display = 'block';
	}
}

function scrollToTop() {
	var indicator = document.querySelector(".fade-panel")
	var position = window.getComputedStyle(indicator).getPropertyValue("position");
	
	if ((position == 'sticky') && (window.scrollY >= 162)) {
		window.scrollTo(0, 162);
	} else {
		window.scrollTo(0, 0);
	}
}
