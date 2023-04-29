//ОТКРЫТИЕ ОКНА ПОПАП ПРИ НАЖАТИИ НА КНОПКУ-КАРАНДАШ
const popupElement = document.querySelector(".popup");
const popupButtonOpenElement = document.querySelector(".profile__open-button");

const openPopap = function () {
  popupElement.classList.add("popup_opened");
};
popupButtonOpenElement.addEventListener ("click", openPopap);


//ЗАКРЫТИЕ ОКНА ПОПАП ПРИ НАЖАТИИ НА КНОПКУ-КРЕСТИК
const popupClozeElement = popupElement.querySelector(".popup__cloze-icon");

const clovzePopap = function () {
  popupElement.classList.remove("popup_opened");
};

popupClozeElement.addEventListener ("click", clovzePopap);

// ВНЕСЕНИЕ ИЗМЕНЕНИЙ В ПОЛЯ ПОПАПА И СОХРАНИНЕ ЭТИХ ДАННЫХ НА СТРАНИЦЕ
const popupNameEiement = popupElement.querySelector(".popup__name");
const popupProfessionElement = popupElement.querySelector(".popup__profession");

const profileNameElement = document.querySelector(".profile__name");
const profileProfessionElement = document.querySelector(".profile__profession");

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileNameElement.textContent = popupNameEiement.value;
    profileProfessionElement.textContent = popupProfessionElement.value;
    clovzePopap();
}

popupElement.addEventListener('submit', handleFormSubmit);
