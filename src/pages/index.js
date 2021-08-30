

let userId;

import { Card } from '../components/Card.js'
import Api from '../components/Api.js'
import { FormValidator } from '../components/FormValidator.js'
import Section from '../components/Section.js'
import './index.css'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import PopupDelete from '../components/PopupDelete.js'

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
  profileSelectors,
  popupEditAvatar,
  profileAvatar,
  inputAvatarLink,
  popupConfirm,
  profileAvatarButton
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
  .then(([data, item]) => {
    console.log(item)
    console.log(data)
    userInfo.setUserInfo(data)
    userId = data._id
    
    originalCards.renderItems(item)
  })
  .catch((err) => {
    console.log(err)
  })



function createCard(item, template) {
  const card = new Card({
    item, handleCardClick: (name, link) => {
      popupWithImg.open(name,link)
    },
    deleteCard:()=>{
      popupDelete.open(card)
    },
    likeCard:()=>{
      const likedCard = card.likedCard();
      const result = likedCard ? api.dislikeCard(card.getItemId()) : api.likeCard(card.getItemId());

      result.then(data => {
        card.setLikes(data.likes);
        card.renderLikes()

      }).catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
    }
  }, template,userId,item._id)

  

  return card
}

const popupDelete = new PopupDelete(popupConfirm,(evt,card)=>{
  deleteConfirm(evt,card)
})

// создание нового аватара 

const newAvatar = new PopupWithForm(
  popupEditAvatar,
  (item) => {
    newAvatar.renderLoading(true)
    console.log(item)
    api.editUserAvatar(inputAvatarLink.value)
    .then((res)=>{
      console.log(res)
      userInfo.setUserInfo(res)
      newAvatar.close()
    })
    .finally(()=>{
      newAvatar.renderLoading(false)
    })
  }
)



popupDelete.setEventListeners()

function deleteConfirm(evt,newCard){
  console.log(newCard.getItemId())
  console.log(evt)
  api.removeCard(newCard.getItemId())
    .then(() => {
      newCard.removeCard()
      popupDelete.close()
    })
    .catch((err) => {
      console.log(err); 
  });
}




// создание новых карточек
const newCard = new PopupWithForm(
  popupAddCards,
  (item) => {
    newCard.renderLoading(true)
    api.addNewCard(item)
    
        .then(item => {
          console.log(item)
          const newCards = createCard(item, placesTemplate)
          const newAddedCard = newCards.getCard()
          originalCards.addItems(newAddedCard)
          newCard.close()
        })
        .finally(()=>{
          newCard.renderLoading(false)
        })
        .catch((err)=>{
          console.log(err)
        })
    
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
    popupProfile.renderLoading(true)
    api.postUserInfo(item)
      .then(() => {
        console.log(item)
        userInfo.setUserInfo(item)
        popupProfile.close()
      })
      .finally(()=>{
        popupProfile.renderLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })

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
// слушатель для авы
profileAvatarButton.addEventListener('click', () => {
  validationEditAvatar.resetValidation()
  newAvatar.open()
})


// создания и вызовы класса валидации
const validationAddForm = new FormValidator(enableValidation, formAddCard)
const validationEditProfile = new FormValidator(enableValidation, formEditProfile)
const validationEditAvatar = new FormValidator(enableValidation, popupEditAvatar)
const popupWithImg = new PopupWithImage(placesPopup, placesImgOfPopup, placesPopupName)
validationAddForm.enableValidation()
validationEditProfile.enableValidation()
validationEditAvatar.enableValidation()
popupWithImg.setEventListeners()
popupProfile.setEventListeners()
newAvatar.setEventListeners()
newCard.setEventListeners()




