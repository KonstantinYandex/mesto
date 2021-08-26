export default class UserInfo{
  constructor({title,subtitle}){
    this._profileName = title
    this._profileJob = subtitle
  }

  getUserInfo(){
    const userInfo = {
      title: this._profileName.textContent,
      subtitle: this._profileJob.textContent
    }

    return userInfo
  }

  setUserInfo({name,about}){
    if(name){
      this._profileName.textContent = name
    }
    if (about){
      this._profileJob.textContent = about
    }
  }
}