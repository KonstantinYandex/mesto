
export class FormValidator {
  constructor(enableValidation, form) {
    this._input = enableValidation.input;
    this._form = form;
    this._popupSubmitButton = this._form.querySelector(enableValidation.popupSubmitButton);
    this._submitButtonDisabled = enableValidation.submitButtonDisabled;
    this._inputError = enableValidation.inputError;

    this._inputs = Array.from(this._form.querySelectorAll(this._input));
  }

  enableValidation() {
    this._toggleButtonState()
    this._inputs.forEach(inputEl => {
      inputEl.addEventListener('input', () => {
        this._isValid(inputEl)
        this._toggleButtonState()
      })
    })
  }

  _isValid(inputEl) {
    this._inputEl = inputEl;
    if (!this._inputEl.validity.valid) {
      this._showInputError(this._inputEl)
    } else {
      this._hideInputError(this._inputEl)
    }
  }



  _showInputError(inputEl) {
    const errorEl = this._form.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.add(this._inputError)
    errorEl.textContent = this._inputEl.validationMessage
  }



  _hideInputError(inputEl) {
    const errorEl = this._form.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.remove(this._inputError)
    errorEl.textContent = ''
  }

  resetValidation() {
    this._inputs.forEach(inputEl=>{
      this._hideInputError(inputEl)
      this._toggleButtonState()
    })

  }


  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._popupSubmitButton.classList.add(this._submitButtonDisabled)
      this._popupSubmitButton.setAttribute('disabled', true)
    } else {
      this._popupSubmitButton.classList.remove(this._submitButtonDisabled)
      this._popupSubmitButton.removeAttribute('disabled')
    }
  }

  _hasInvalidInput() {
    return this._inputs.some(el => {
      return !el.validity.valid
    })
  }


}

