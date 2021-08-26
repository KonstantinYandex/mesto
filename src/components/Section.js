export default class Section{
  constructor({renderer},container){
    this._renderer = renderer;
    this._container = container
  }

  renderItems(items){
    items.forEach(item => this._renderer(item))
  }

  addItems(el){
    this._container.prepend(el)
  }

  setItems(el){
    this._container.append(el)
  }
}