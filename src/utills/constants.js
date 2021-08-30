export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const enableValidation = {
  form: '.popup__form',
  input: '.popup__input',
  popupSubmitButton: '.popup__button-save',
  submitButtonDisabled: 'popup__button-save_inactive',
  inputError: 'popup__input_type_error'
}




// Сама страница
const page = document.querySelector('.page');
// Общий попап
export const popups = page.querySelectorAll('.popup')
// Попап для редактирования профиля
export const profilePopup = page.querySelector('.popup_edit-profile');
// Попап для редактирования карточек
export const popupAddCards = page.querySelector('.popup_add-cards')
// попап редактирование аватарки
export const popupEditAvatar = page.querySelector('.popup_edit-avatar')
export const popupConfirm = page.querySelector('.popup_confirm-delete')
// Кнопка для редактирования профиля
export const profileEditButton = page.querySelector('.profile__edit-button');
// общая форма для редактирования профиля
export const formEditProfile = profilePopup.querySelector('.popup__form_edit-text');
//  общая Форма для добавления карточек
export const formAddCard = popupAddCards.querySelector('.popup__form-add')
// Форма для ввода имени в попапе
export const inputName = formEditProfile.querySelector('.popup__input_type_name');
// Форма для ввода вида деятельности в попапе
export const inputJob = formEditProfile.querySelector('.popup__input_type_job');
// Форма для добавления названия карточки
export const inputCardName = formAddCard.querySelector('.popup__input_type_name-card')
// Форма для ввода ссылки
export const inputCardLink = formAddCard.querySelector('.popup__input_type_link-card')
// Текстовое поле в профиле(имя)
export const profileSelectors = {
  title: page.querySelector('.profile__title'),
  subtitle: page.querySelector('.profile__subtitle'),
  avatar : '.profile__avatar'
}

export const inputAvatarLink = page.querySelector('.popup__input_type_link-avatar')
export const profileAvatar = page.querySelector('.profile__avatar')
export const profileAvatarButton = page.querySelector('.profile__info-avatar-button')
export const profileName = page.querySelector('.profile__title');
// Текстовое поле в профиле(вид деятельности)
export const profileJob = page.querySelector('.profile__subtitle');
//Содержимое template тега
export const placesTemplate = document.querySelector('.places-template')
// Контейнер,куда вставляем template
export const placesBlock = page.querySelector('.places')
// Кнопка добавления новых карточек
export const addCardButton = page.querySelector('.profile__add-button')

// DOM для попапа с картинками
export const placesPopup = page.querySelector('.popup-of-places')
export const placesImgOfPopup = placesPopup.querySelector('.popup-of-places__img')
export const placesPopupName = placesPopup.querySelector('.popup-of-places__name')

