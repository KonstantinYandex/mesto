import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popup,handleForSubmit){
    super(popup)
    this._handleForSubmit = handleForSubmit
    this._inputList = this._popup.querySelectorAll('.popup__input')
    // пока не знаю до конца как,но stackoverflow помог.до этого в коде создавались две карточки,вместо одной:))
    this._submit = (evt) =>{
      console.log('1')
      evt.preventDefault()
      this._handleForSubmit(this._getInputValues())
      this.close()
    }

    this._submitClick = this._submit.bind(this)
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

