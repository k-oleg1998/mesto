let editButton = document.querySelector('.profile-info__edit-button');
let popup = document.querySelector('.popup')
let close = document.querySelector('.popup__close')
let nameInfo = document.querySelector('.profile-info__name')
let jobInfo = document.querySelector('.profile-info__job')
let formElement =  document.querySelector('.popup-container__form')
let nameInput = document.querySelector('.popup-container__input_name')
let jobInput = document.querySelector('.popup-container__input_job')
let submit = document.querySelector('.popup-container__sumbit')

function popupOpen() {
    popup.classList.add('popup_open')
    nameInput.value = nameInfo.textContent
    jobInput.value = jobInfo.textContent
}

function popupClose() {
    popup.classList.remove('popup_open')
}

function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    nameInput = nameInput.value
    jobInput = jobInput.value
    nameInfo.textContent = nameInput
    jobInfo.textContent = jobInput
    popupClose();
}

formElement.addEventListener('submit', handleFormSubmit); 

editButton.addEventListener('click', popupOpen);

close.addEventListener('click', popupClose);