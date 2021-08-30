
export class Card {
  constructor({item,handleCardClick,deleteCard,likeCard},placesTemplate,userId,cardId) {
    this._placesTemplate = placesTemplate;
    this._handleCardClick = handleCardClick
    this._deleteCard = deleteCard
    this._likeCard = likeCard
    this._name = item.name;
    this._link = item.link;
    this._alt = item.name;
    this._userId = userId;
    this._ownerId = item.owner._id
    this._counterLikes = item.likes
    this._cardID = cardId

  }

  _getTemplate() {
    const cardEl = this._placesTemplate.content.querySelector('.places__item').cloneNode(true);
    return cardEl;
  }

  getCard() {
    this._element = this._getTemplate()
    this._img = this._element.querySelector('.places__item-img')
    this._img.src = this._link
    this._img.alt = this._name
    this._element.querySelector('.places__item-name').textContent = this._name;
    this.placesLikeButton = this._element.querySelector('.places__like-button')
    this.placesDeleteButton = this._element.querySelector('.places__item-delete-button')
    this._setEventListeners()
    if(this._ownerId !== this._userId){
      this.placesDeleteButton.style.display = 'none'
    }
    this._likes = this._element.querySelector('.places__like-counter')
    this.renderLikes()
    return this._element
  }

  _setEventListeners() {
    this.placesLikeButton.addEventListener('click', ()=> {
      // const evtTarget = evt.target
      // evtTarget.classList.toggle('places__like-button_active')
      this._likeCard()
    })
    this.placesDeleteButton.addEventListener('click', ()=> {
      this._deleteCard()
    });
    this._img.addEventListener('click', () => {
      this._handleCardClick(this._name,this._link)
    })
  }


  removeCard(){
    this._element.remove()
  }


  renderLikes(){
    this._likes.textContent = this._counterLikes.length
    this.showLikes(this._ownerId)
  }

  likedCard() {
    return this._counterLikes.some(like => {
      return like._id === this._userId
    })
  }

  showLikes() {
    if (this.likedCard(this._userI)) {
      this.placesLikeButton.classList.add('places__like-button_active')
    } else {
      this.placesLikeButton.classList.remove('places__like-button_active')
    }
  }

  setLikes(list) {
    this._counterLikes = list
  }

  getItemId(){
    return this._cardID
  }
  

}


