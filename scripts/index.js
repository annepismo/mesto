//ОТКРЫТИЕ ОКНА ПОПАП ПРИ НАЖАТИИ НА КНОПКУ-КАРАНДАШ
//Познакомим JS с открывающимся окном-попапом, поможте нам селектор .popup
//const - обраащаемся к переменной (обращаемся через селектор .popup к открывающемуся окну (попапу))
//popupElement - название переменной (сами называем, но по правилам). В перво части названия должно быть полнятно к чему отноститься Элемент. Вторая часть названия всегда "Element"
//document.querySelector("") - спец инструмент работающий с классами в HTML документе. В скобках сами прописываем селектр, который идентифицирует попап (".popup")
const popupElement = document.querySelector(".popup");
//console.log(popupElement);

//обращаемся через селектор .profile__button-pen к кнопке открытия попапа (кнопка-карандаш)
const popupButtonOpenElement = document.querySelector(".profile__open-button");
//console.log(popupButtonOpenElement);


//прописываем функцию. Называем "openPopap". Название функции должно содержать глагол (в данном случае  open - "открывать") и существительное (к чему относится действие)
const openPopap = function () {
//для popupElement (элименты с классом popup - открывающегося окна) пишем
//cвойство classList, которое даёт возможность просматривать и манипулировать классами элемента
//.add - добавляем класс ("popup_opened") открывающемуся окну (попапу). Класс .popup_opened со свойством display: flex; перекрывает действие класса .popup со свойством display: none; (элемент с таким свойством и все его дочерние элементы не восприниматься технологиями чтения экрана.)
  popupElement.classList.add("popup_opened");
//При открытии попапа данные из текстовых полей профиля заносится в инпуты. Проверка происходит: открываем попап => удаляем текстовое содержимое инпутов => закрываем попап => открываем попап, данные из профиля должны быть в инпутах
  popupNameEiement.value = profileNameElement.textContent;
  popupProfessionElement.value = profileProfessionElement.textContent;
};



//*addEventListener - метод, который принимает на вход 2 значения: 1. событие (в нашем случае клик мышки), 2. Функцию
//* таким образом получается применяем к кнопке открытия попапа (кнопке-карандашу) метод:
//при исполнении события "клике" по кнопке-карандашу срабатывает функция, которая добавляет класс .popup_opened открывающемуся окну (попапу). Класс .popup_opened со свойством display: flex; перекрывает действие класса .popup со свойством display: none;
popupButtonOpenElement.addEventListener ("click", openPopap);


//ЗАКРЫТИЕ ОКНА ПОПАП ПРИ НАЖАТИИ НА КНОПКУ-КРЕСТИК
//обращаемся через селектор .popup__cloze-icon к значку закрытия окна (кнопка-крестик)
//заменили = document.querySelector на = popupElement.querySelector, так как ищим не по всему документу, а только внутри попапа
const popupClozeElement = popupElement.querySelector(".popup__cloze-icon");
//console.log(popupClozElement);

const clovzePopap = function () {
  popupElement.classList.remove("popup_opened");
};
//.remov - убирает класс ("popup_opened") открывающемуся окну (попапу).

popupClozeElement.addEventListener ("click", clovzePopap);

// ВНЕСЕНИЕ ИЗМЕНЕНИЙ В ПОЛЯ ПОПАПА И СОХРАНИНЕ ЭТИХ ДАННЫХ НА СТРАНИЦЕ
// После внесения изменений в поля "Имя", "Профессия" и нажатия кнопки «Сохранить» информация на странице
// должна обновиться, а попап автоматически закрыться
// Находим поля "Имя", "Профессия" попапа в DOM
const popupNameEiement = popupElement.querySelector(".popup__inputs_user_name");
const popupProfessionElement = popupElement.querySelector(".popup__inputs_user_profession");
// Находим элементы, куда должны быть вставлены значения полей
const profileNameElement = document.querySelector(".profile__name");
const profileProfessionElement = document.querySelector(".profile__profession");

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault();
    // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки.
    profileNameElement.textContent = popupNameEiement.value;
    profileProfessionElement.textContent = popupProfessionElement.value;
    // Получаю значение полей jobInput и nameInput из свойства value
    // Выбераю элементы, куда должны быть вставлены значения полей
    // Вставляю новые значения с помощью textContent
    clovzePopap();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupElement.addEventListener('submit', handleFormSubmit);
