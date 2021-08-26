import Popup from "./Popup";

export default class PopupWithImage extends Popup{
  constructor(popup,placesImgOfPopup,placesPopupName){
    super(popup)
    this._image = placesImgOfPopup
    this._title = placesPopupName
  }

  open(name,link){
    this._image.alt = name
    this._image.src = link
    this._title.textContent = name
    super.open()
  }
}