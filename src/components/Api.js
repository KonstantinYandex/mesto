export default class Api{
  constructor({address,headers}){
    this._address = address
    this._headers = headers
  }


  getOriginsCards(){
    return fetch(`${this._address}/cards`,{
      headers: this._headers
    }).then(this._checkResponse)
  }

  getUserInfo(){
    return fetch(`${this._address}/users/me`,{
      headers: this._headers
    }).then(this._checkResponse)
  }

  _checkResponse(res){
    if(!res.ok){
      return Promise.reject(`Ошибка ${res.status}`)
    }

    return res.json()
  }

}