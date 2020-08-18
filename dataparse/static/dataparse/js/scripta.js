
function slide(direction) {
	var topLeft = document.querySelector(".top-left"); 
	var slideButton1 = document.querySelector(".expand-icon-1");
	var slideButton2 = document.querySelector(".expand-icon-2");
	if (direction == 'right') {
		topLeft.style.display = 'flex';
		slideButton1.style.display = 'block';
		slideButton2.style.display = 'none';
	} else {              
		topLeft.style.display = 'none';
		slideButton1.style.display = 'none';
		slideButton2.style.display = 'block';
	}
}
