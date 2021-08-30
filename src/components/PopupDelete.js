import Popup from "./Popup";

export default class PopupDelete extends Popup{
    constructor(popup,submit){
        super(popup)
        this._submit = submit
    }


    setEventListeners(){
        super.setEventListeners()
        this._popup.addEventListener('submit',(ev)=>{
            ev.preventDefault()
            this._submit(ev,this._card)
            
        })
    }

    open(card){
        this._card = card
        super.open()
    }
}