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
	var previous = document.getElementById("prevPicture"); 	// strzałka 'poprzednie'
	var next = document.getElementById("nextPicture");		// strzałka 'następne'

// obrazki i indeks do sterowania:
	var list = document.querySelectorAll(".pictures"); 	// lista klas
	var z = 0;
	list[z].classList.add("visible"); 
	list[z].classList.remove("pictures"); 

	next.addEventListener('click', nextSlide); 			// na kliknięcie uruchom funkcję 'nextSlide'
	previous.addEventListener('click', prevSlide);		// na kliknięcie uruchom funkcję 'prevSlide'

	function nextSlide(event) {
		list[z].classList.add("pictures"); 		// bieżącemy obrazkowi dodaj klasę 'pictures' (ukryje go)
		list[z].classList.remove("visible"); 	// usuń mu klasę 'visible'
		z += 1;									
		if (z === list.length) { 				
			z = 0;
		}
		list[z].classList.remove("pictures"); 	// następnemu obrazkowi usuń klasę 'pictures'
		list[z].classList.add("visible");		// dodaj klasę 'visible' (pokaże go)
	}
		
	function prevSlide(event) {
		list[z].classList.remove("visible");
		list[z].classList.add("pictures"); 
		z -= 1;
		if (z < 0) {
			z = 2;
		}
		list[z].classList.remove("pictures");
		list[z].classList.add("visible"); 
	}


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

/* (4d) eventy dla kompletowania zamówienia */
// uchwycenie elementu tworzonego dynamicznie:
    var title = document.querySelector(".title"); // napis 'Twój fotel'
    var titleValue = document.querySelector(".title.value"); // miejsce na wartość

    var color = document.querySelector(".color"); // miejsce na 'kolor'
    var colorValue = document.querySelector(".color.value"); 

    var pattern = document.querySelector(".pattern"); // miejsce na 'wzór'
    var patternValue = document.querySelector(".pattern.value");

    var transport = document.querySelector(".transport"); // miejsce na 'transport'
    var transportValue = document.querySelector(".transport.value");

    var sum = document.querySelector(".sum"); 

// zmienne na kwoty z początkowymi wartościami:
	var number1 = 0; // rodzaj krzesła
    var number2 = 0; // kolor krzesła
    var number3 = 0; // rodzaj materiału
    var number4 = 0; // koszt transportu
    var suma = 0; 	// koszt całkowity

// inne zmienne:
// 0-wszystkie rozwijane panele:
	var choice1 = document.getElementById("listPanel1");
	var choice2 = document.getElementById("listPanel2");
	var choice3 = document.getElementById("listPanel3");
// 1-lista opcji rodzaj krzesła
	var listPanelChildren = choice1.children; 

// 2-lista opcji kolor krzesła: 
    var listPanelChildren1 = choice2.children;

// 3-lista opcji materiał:
    var listPanelChildren2 = choice3.children;

// uchwycenie etykiet list do rozwijania:
    var listLabel = document.querySelectorAll(".list_label");

// realizacja zamówień:
	for (var i = 0; i < listPanelChildren.length; i++) { // lista rodzaj krzesła...
        listPanelChildren[i].addEventListener("click", function () { // ...dla każdego elementu listy...
        listLabel[0].innerHTML = this.textContent; // ...tekst pierwszej etykiety zmień na wybrany rodzaj krzesła
        choice1.style.display = "none"; // ...listy nie wyświetlaj 

        title.innerHTML = this.textContent; // za tytuł wpisz wybraną nazwę
        titleValue.innerHTML = this.dataset.chairPrice; // za wartość wpisz dane z dataset (cena krzesła)
        number1 = parseInt(this.dataset.chairPrice);

        if (transportCost.checked) { // jeśli zaznaczono transport, dadaj też tę kwotę
            suma = number1 + number2 + number3 + number4;
        } 
        else {
            suma = number1 + number2 + number3;
        }
        sum.textContent = suma;
        });
    }

    for (var i = 0; i < listPanelChildren1.length; i++) {
        listPanelChildren1[i].addEventListener("click", function () {
        listLabel[1].innerHTML = this.textContent;
        choice2.style.display = "none";

        color.innerHTML = this.textContent;
        colorValue.innerHTML = this.dataset.colorPrice;
        number2 = parseInt(this.dataset.colorPrice);
        suma = number1 + number2 + number3 + number4;
        });
    }

    for (var i = 0; i < listPanelChildren2.length; i++) {
        listPanelChildren2[i].addEventListener("click", function () {
        listLabel[2].innerHTML = this.textContent;
        choice3.style.display = "none";

        pattern.innerHTML = this.textContent;
        patternValue.innerHTML = this.dataset.materialPrice;
        number3 = parseInt(this.dataset.materialPrice);
        suma = number1 + number2 + number3 + number4;
        sum.textContent = suma;
        });
    }

// dopisanie do KOSZTÓW transportu           
    var transportCost = document.querySelector("#transport");

    transportCost.addEventListener("click", function () {
      	var price = transportCost.dataset.transportPrice;
       	suma = number1 + number2 + number3;
        number4 = parseInt(price);
        if (transportCost.checked) {
            transport.textContent = "Transport";
            transportValue.textContent = price;
           	suma += number4;
        } 
        else {
        	transport.innerHTML = "";
           	transportValue.textContent = "";
            suma = number1 + number2 + number3;
        }
         // ZWERYFIKOWAĆ !!!
    sum.textContent = suma;
    });

}

















