const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup')
let close = popup.querySelector('.popup__container-close')
let nameInfo = document.querySelector('.profile__name')
let jobInfo = document.querySelector('.profile__job')
let formElement =  document.querySelector('.popup__container-form')
let nameInput = popup.querySelector('.popup__container-input_profile_name')
let jobInput = popup.querySelector('.popup__container-input_profile_job')
const submit = popup.querySelector('.popup__container-submit')

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

    console.dir(nameInput.value)
    console.dir(jobInput.value)

    nameInfo.textContent = nameInput.value
    jobInfo.textContent = jobInput.value
    popupClose();
}

formElement.addEventListener('submit', handleFormSubmit);

editButton.addEventListener('click', popupOpen);

close.addEventListener('click', popupClose);
