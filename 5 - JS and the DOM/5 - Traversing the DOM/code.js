const ul = document.querySelector('ul');

ul.addEventListener('click', (event) => {
		if (event.target.tagName == 'BUTTON'){
			if (event.target.className == 'remove') {
				let li = event.target.parentNode;
				let ul = li.parentNode;
				ul.removeChild(li);
			}

			if (event.target.className == 'up') {
				let li = event.target.parentNode;
				let prevLi = li.previousElementSibling;				
				let ul = li.parentNode;
				if (prevLi)
					ul.insertBefore(li, prevLi);
			}

			if (event.target.className == 'down') {
				let li = event.target.parentNode;
				let afterLi = li.nextElementSibling;
				let ul = li.parentNode;
				if (afterLi) {
					ul.insertBefore(afterLi, li);
				}				
			}			
		}			
	});
