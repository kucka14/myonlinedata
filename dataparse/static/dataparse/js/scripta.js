
var tabData = [1,0,0,0];

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

function switchTab(tabInt) {
	if (tabInt == 1) {
		$('#tab-one').tab('show');
	} else if (tabInt == 2) {
		$('#tab-two').tab('show');
	} else if (tabInt == 3) {
		$('#tab-three').tab('show');
	}
}	 

function scrollSwitch(newTab) {

	var scroller = document.querySelector(".inner-box-right");
	var indicator = document.querySelector(".fade-panel");
	var position = window.getComputedStyle(indicator).getPropertyValue("position");
	
	if (tabData[0] == newTab) {
		tabData[tabData[0]] = 0;
		scrollDistance = 0;
	} else {
		if (position == 'sticky') {
			scrollDistance = tabData[newTab];
			tabData[tabData[0]] = window.scrollY;
			if (scrollDistance < 162) {
				if (window.scrollY > 162) {
					scrollDistance = 162;
				} else {
					scrollDistance = window.scrollY;
				}
			}
			tabData[0] = newTab;
			switchTab(newTab);
			setTimeout(function(){window.scrollTo(0,scrollDistance);},250);
		} else {
			scrollDistance = (tabData[newTab] - 162) || 0;
			tabData[tabData[0]] = scroller.scrollTop + 162;
			tabData[0] = newTab;
			switchTab(newTab);
			setTimeout(function(){scroller.scrollTo(0,scrollDistance);},250);
		}
	}
	
	return tabData;
}








