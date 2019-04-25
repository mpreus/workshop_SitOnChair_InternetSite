document.addEventListener("DOMContentLoaded", init);

function init() {
/* (1) eventy dla MENU - wyświetlania i chowanie podmenu */
	var menu = document.getElementById("menu"); // uchwycenie elemntu 'menu' do zmiennej

	menu.addEventListener('mouseover', showMenu); 		// nasłuch na najechanie myszką na 'menu'...
	function showMenu(event) { 							// ...ma pokazywać podmenu na stronie
		var subMenu = document.getElementById("subMenu"); 	// uchwycenie elementu pokazywanego na event
		subMenu.style.display = "inline-block"; 		// zmiana sposoby wyświetlania pokazuje element
	}

	menu.addEventListener('mouseleave', hideMenu); 	// nasłuch na zjechanie myszką z 'menu'...
	function hideMenu(event) { 						// ...uruchamia funkcję 'hideMenu'
		subMenu.style.display = "none";				// ponownie chowającą podmenu
	}
/* (2) eventy dla obrazków w sekcji COMMERCIAL */
	var image1 = document.getElementById("imageClair");
	var image2 = document.getElementById("imageMargarita");

/* - dla obrazka CLAIR */
	image1.addEventListener('mouseover', removeData1);
	function removeData1(event) {
		var nameBlock1 = document.getElementById("data1");
		nameBlock1.style.display = "none";
	}
	image1.addEventListener('mouseleave', showData1);
	
	function showData1(event) {
		var nameBlock1 = document.getElementById("data1");
		nameBlock1.style.display = "block";
	}

/* - dla obrazka MARGARITA */
	image2.addEventListener('mouseover', removeData2);
	function removeData2(event) {
		var nameBlock2 = document.getElementById("data2");
		nameBlock2.style.display = "none";
	}
	image2.addEventListener('mouseleave', showData2);
	
	function showData2(event) {
		var nameBlock2 = document.getElementById("data2");
		nameBlock2.style.display = "block";
	}

/* (3) SLAJDER */
// uchwycenie elementów sterujących slajdami:
	var previous = document.getElementById("prevPicture");
	var next = document.getElementById("nextPicture");

// obrazki i indeks do sterowania:
	var list = document.querySelectorAll(".pictures"); // lista klas

	var index = 0;

	list[index].setAttribute("class", "visible"); // pierwszy obrazek jest widoczny

// funkcja dla elementu "poprzedni obrazek":
	previous.addEventListener('click', prevSlide); 	// na kliknięcie...
	function prevSlide(event) {						// ...bieżącemu elementowi listy zdejmij klasę
		list[index].removeAttribute("class", "visible");
		index -= 1;									// zmniejsz indeks
		if (index === -1) {							// warunek - indeks nie mniejszy niż 0
			index = list.length - 1;
		}
		list[index].setAttribute("class", "visible"); 	// elementowi z mniejszym indeksem dodaj klasę
	}

// funkcja dla elementu "następny obrazek":
	next.addEventListener('click', nextSlide); 	// na kliknięcie...
	function nextSlide(event) {					// ...bieżącemu elementowi usuń klasę
		list[index].removeAttribute("class", "visible");
		index += 1;							// zwiększ indeks
		if (index >= list.length) { 
			index = 0;
		}
		list[index].setAttribute("class", "visible"); // elementowi listy z większym indeksem dodaj klasę
	}
/* UWAGA - powyższe ustawienia poprawnie wyświetlają pierwszy obrazek, 
poprawnie przypisują klasę 'visible' i poprawnie ją usuwają (co widać w konsoli),
ale obrazki nie zmieniają się - pojawiają się kolejne jeden pod drugim. 
Zapewne coś w CSS, ale nie mogę dojść co */


/* (4a) eventy dla kompletowania ZAMÓWIENIA - wysuwanie i chowanie podmenu 'rodzaj krzesła' */
	var chairType = document.getElementById("arrow1");
	chairType.addEventListener('click', showListOfTypes);
	chairType.addEventListener('dblclick', hideListOfTypes);

	function showListOfTypes(event) {
		var choice1 = document.getElementById("listPanel1");
		choice1.style.display = "block";
	}

	function hideListOfTypes(event) {
		var choice1 = document.getElementById("listPanel1");
		choice1.style.display = "none";
	} 

/* UWAGA - w każdym z przypadków lista ma się chować także po kliknięciu (wybraniu) opcji */

/* (4b) eventy dla kompletowania ZAMÓWIENIA - wysuwanie i chowanie podmenu 'kolor krzesła' */
	var chairColor = document.getElementById("arrow2");
	chairColor.addEventListener('click', showListOfColors);
	chairColor.addEventListener('dblclick', hideListOfColors);

	function showListOfColors(event) {
		var choice2 = document.getElementById("listPanel2");
		choice2.style.display = "block";
	}

	function hideListOfColors(event) {
		var choice2 = document.getElementById("listPanel2");
		choice2.style.display = "none";
	}

/* (4c) eventy dla kompletowania ZAMÓWIENIA - wysuwanie i chowanie podmenu 'materiał krzesła' */
	var chairFabric = document.getElementById("arrow3");
	chairFabric.addEventListener('click', showListOfFabric);
	chairFabric.addEventListener('dblclick', hideListOfFabric);

	function showListOfFabric(event) {
		var choice3 = document.getElementById("listPanel3");
		choice3.style.display = "block";
	}

	function hideListOfFabric(event) {
		var choice3 = document.getElementById("listPanel3");
		choice3.style.display = "none";
	}




}

















