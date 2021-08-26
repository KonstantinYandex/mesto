import { popups } from "../utills/constants";

export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this)
  }



  open() {
    this._popup.classList.add('popup_active')
    document.addEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  close() {
    this._popup.classList.remove('popup_active')
    document.removeEventListener('keydown', this._handleEscClose)
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) =>{
      if (evt.target.classList.contains('popup__close') || evt.target === evt.currentTarget){
        this.close()
      }
    })
  }

}