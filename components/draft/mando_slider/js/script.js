
let clickCounter = 0;
let buttonNext = document.querySelector('.butt_next');
let massiveCardPerson = document.querySelectorAll('.card_penson');

// Задаем начальное расположение первого слайда
massiveCardPerson[0].style.transform = 'translate(10px, 20px)';

// вешаем событие клика по кнопке "Next"
buttonNext.onclick = removeCurrentSlide;

function showNextSlide() {
	if (clickCounter == massiveCardPerson.length-1) {
		massiveCardPerson[0].classList.add('animImgIn');
		massiveCardPerson[0].addEventListener('animationend', stopAnimation);
	}
	else {
		massiveCardPerson[clickCounter+1].classList.add('animImgIn');
		massiveCardPerson[clickCounter+1].addEventListener('animationend', stopAnimation);
	}
	
}
function removeCurrentSlide() {
	buttonNext.disabled = true;
	massiveCardPerson[clickCounter].classList.add('animImgOut');
	massiveCardPerson[clickCounter].addEventListener('animationend', setLocationImgOut);
	setTimeout(showNextSlide, 700);
}

function setLocationImgOut() {
	massiveCardPerson[clickCounter].style.transform = 'translate(600px, 20px)';
	massiveCardPerson[clickCounter].classList.remove('animImgOut');
	massiveCardPerson[clickCounter].removeEventListener('animationend', setLocationImgOut);
}
function stopAnimation() {
	if (clickCounter == massiveCardPerson.length-1) {
		massiveCardPerson[0].style.transform = 'translate(10px, 20px)';
		massiveCardPerson[0].classList.remove('animImgIn');
		massiveCardPerson[0].removeEventListener('animationend', stopAnimation);
		clickCounter = 0;
		buttonNext.disabled = false;
	}
	else {
		massiveCardPerson[clickCounter+1].style.transform = 'translate(10px, 20px)';
		massiveCardPerson[clickCounter+1].classList.remove('animImgIn');
		massiveCardPerson[clickCounter+1].removeEventListener('animationend', stopAnimation);
		clickCounter++;
		buttonNext.disabled = false;
	}
}