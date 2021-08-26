
import { Card } from '../components/Card.js'
import  Api  from '../components/Api.js'
import { FormValidator } from '../components/FormValidator.js'
import Section from '../components/Section.js'
import './index.css'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import {
  profilePopup,
  profileName,
  profileJob,
  inputName,
  inputJob,
  inputCardName,
  inputCardLink,
  formAddCard,
  placesBlock,
  initialCards,
  placesTemplate,
  profileEditButton,
  formEditProfile,
  addCardButton,
  popupAddCards,
  enableValidation,
  placesPopupName,
  placesPopup,
  placesImgOfPopup,
  profileSelectors
}
  from '../utills/constants.js'



const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-27',
  headers: {
    authorization: 'dacd008f-f282-42b8-8173-c4cc50ca8555',
    'Content-type': 'application/json'
  }
})

Promise.all([api.getUserInfo(), api.getOriginsCards()])
  .then(([data,item])=>{
    console.log(item)
    console.log(data)
    userInfo.setUserInfo(data)
    originalCards.renderItems(item)
  })
  .catch((err) => {
    console.log(err)
  })



function createCard(item, template) {
  const card = new Card({
    item, handleCardClick: (name, link) => {
      popupWithImg.open(name, link)
    }
  }, template)

  return card
}


// создание новых карточек
const newCard = new PopupWithForm(
  popupAddCards,
  (item) => {
    const newCards = createCard(item, placesTemplate)
    const newAddedCard = newCards.getCard()
    originalCards.addItems(newAddedCard)
  })

// вывод начальных карточек
const originalCards = new Section({
  renderer: (item) => {
    const card = createCard(item, placesTemplate)
    const originalCardsElement = card.getCard()
    originalCards.setItems(originalCardsElement)

  }
}, placesBlock)

// попап профиля

const popupProfile = new PopupWithForm(
  profilePopup,
  (item) => {
    console.log(item)
    userInfo.setUserInfo(item)
  }
)


const userInfo = new UserInfo(profileSelectors)

// Слушатель кнопки редакторования
profileEditButton.addEventListener('click', function () {
  popupProfile.open()
  validationEditProfile.resetValidation()
  const profileInfo = userInfo.getUserInfo()
  inputName.value = profileInfo.title
  inputJob.value = profileInfo.subtitle
});

// слушатель для кнопки добавление карточек
addCardButton.addEventListener('click', function () {
  newCard.open()
  validationAddForm.resetValidation()
})

// создания и вызовы класса валидации
const validationAddForm = new FormValidator(enableValidation, formAddCard)
const validationEditProfile = new FormValidator(enableValidation, formEditProfile)
const popupWithImg = new PopupWithImage(placesPopup, placesImgOfPopup, placesPopupName)
validationAddForm.enableValidation()
validationEditProfile.enableValidation()
popupWithImg.setEventListeners()
popupProfile.setEventListeners()
newCard.setEventListeners()
// originalCards.renderItems()





