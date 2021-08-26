
export class Card {
  constructor({item,handleCardClick},placesTemplate) {
    this._placesTemplate = placesTemplate;
    this._handleCardClick = handleCardClick
    this._name = item.name;
    this._link = item.link;
    this._alt = item.name;

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
    this.placesLikeButton = this._element.querySelector('.places__item-button')
    this.placesDeleteButton = this._element.querySelector('.places__item-delete-button')
    this._setEventListeners()
    return this._element
  }

  _setEventListeners() {
    this.placesLikeButton.addEventListener('click', function (evt) {
      const evtTarget = evt.target
      evtTarget.classList.toggle('places__item-button_active')
    })
    this.placesDeleteButton.addEventListener('click', function (evt) {
      const evtTarget = evt.target
      evtTarget.closest('.places__item').remove()
    });
    this._img.addEventListener('click', () => {
      this._handleCardClick(this._name,this._link)
    })
  }

  

}


