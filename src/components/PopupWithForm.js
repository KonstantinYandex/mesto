import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popup,handleForSubmit){
    super(popup)
    this._handleForSubmit = handleForSubmit
    this._inputList = this._popup.querySelectorAll('.popup__input')
    this._submit = (evt) =>{
      evt.preventDefault()
      this._handleForSubmit(this._getInputValues())
    }
    this._submitClick = this._submit.bind(this)
    this._submitButton = this._popup.querySelector('.popup__button-save')
    this._defaultSubmitButton = this._submitButton.textContent
  }


  renderLoading(isLoading,message='Сохранение...'){
    if(isLoading){
      this._submitButton.textContent = message
    }else{
      this._submitButton.textContent = this._defaultSubmitButton
    }
  }
  setEventListeners(){
    super.setEventListeners()
    this._popup.addEventListener('submit',this._submitClick)

  }

  _getInputValues(){
    this._formValues = {}
    this._inputList.forEach(input => this._formValues[input.name] = input.value)


    return this._formValues
  }

  close(){
    this._popup.querySelector('.popup__form').reset()
    super.close()

  }

}

