!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=e.item,u=e.handleCardClick,a=e.deleteCard,s=e.likeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._placesTemplate=n,this._handleCardClick=u,this._deleteCard=a,this._likeCard=s,this._name=i.name,this._link=i.link,this._alt=i.name,this._userId=r,this._ownerId=i.owner._id,this._counterLikes=i.likes,this._cardID=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return this._placesTemplate.content.querySelector(".places__item").cloneNode(!0)}},{key:"getCard",value:function(){return this._element=this._getTemplate(),this._img=this._element.querySelector(".places__item-img"),this._img.src=this._link,this._img.alt=this._name,this._element.querySelector(".places__item-name").textContent=this._name,this.placesLikeButton=this._element.querySelector(".places__like-button"),this.placesDeleteButton=this._element.querySelector(".places__item-delete-button"),this._setEventListeners(),this._ownerId!==this._userId&&(this.placesDeleteButton.style.display="none"),this._likes=this._element.querySelector(".places__like-counter"),this.renderLikes(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this.placesLikeButton.addEventListener("click",(function(){e._likeCard()})),this.placesDeleteButton.addEventListener("click",(function(){e._deleteCard()})),this._img.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"removeCard",value:function(){this._element.remove()}},{key:"renderLikes",value:function(){this._likes.textContent=this._counterLikes.length,this.showLikes(this._ownerId)}},{key:"likedCard",value:function(){var e=this;return this._counterLikes.some((function(t){return t._id===e._userId}))}},{key:"showLikes",value:function(){this.likedCard(this._userI)?this.placesLikeButton.classList.add("places__like-button_active"):this.placesLikeButton.classList.remove("places__like-button_active")}},{key:"setLikes",value:function(e){this._counterLikes=e}},{key:"getItemId",value:function(){return this._cardID}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=t.address,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._headers=r}var t,r;return t=e,(r=[{key:"getOriginsCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"postUserInfo",value:function(e){var t=e.name,n=e.about;return console.log(t),console.log(n),fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._input=t.input,this._form=n,this._popupSubmitButton=this._form.querySelector(t.popupSubmitButton),this._submitButtonDisabled=t.submitButtonDisabled,this._inputError=t.inputError,this._inputs=Array.from(this._form.querySelectorAll(this._input))}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){var e=this;this._toggleButtonState(),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"_isValid",value:function(e){this._inputEl=e,this._inputEl.validity.valid?this._hideInputError(this._inputEl):this._showInputError(this._inputEl)}},{key:"_showInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputError),t.textContent=this._inputEl.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputError),t.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._inputs.forEach((function(t){e._hideInputError(t),e._toggleButtonState()}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._popupSubmitButton.classList.add(this._submitButtonDisabled),this._popupSubmitButton.setAttribute("disabled",!0)):(this._popupSubmitButton.classList.remove(this._submitButtonDisabled),this._popupSubmitButton.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(e){return!e.validity.valid}))}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItems",value:function(e){this._container.prepend(e)}},{key:"setItems",value:function(e){this._container.append(e)}}])&&u(t.prototype,n),e}(),s={form:".popup__form",input:".popup__input",popupSubmitButton:".popup__button-save",submitButtonDisabled:"popup__button-save_inactive",inputError:"popup__input_type_error"},c=document.querySelector(".page"),l=(c.querySelectorAll(".popup"),c.querySelector(".popup_edit-profile")),f=c.querySelector(".popup_add-cards"),p=c.querySelector(".popup_edit-avatar"),h=c.querySelector(".popup_confirm-delete"),d=c.querySelector(".profile__edit-button"),_=l.querySelector(".popup__form_edit-text"),y=f.querySelector(".popup__form-add"),v=_.querySelector(".popup__input_type_name"),m=_.querySelector(".popup__input_type_job"),b=(y.querySelector(".popup__input_type_name-card"),y.querySelector(".popup__input_type_link-card"),{title:c.querySelector(".profile__title"),subtitle:c.querySelector(".profile__subtitle"),avatar:".profile__avatar"}),k=(c.querySelector(".popup__input_type_link-avatar"),c.querySelector(".profile__avatar"),c.querySelector(".profile__info-avatar-button")),g=(c.querySelector(".profile__title"),c.querySelector(".profile__subtitle"),document.querySelector(".places-template")),w=c.querySelector(".places"),S=c.querySelector(".profile__add-button"),E=c.querySelector(".popup-of-places"),C=E.querySelector(".popup-of-places__img"),L=E.querySelector(".popup-of-places__name");function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup__close")||t.target===t.currentTarget)&&e.close()}))}}])&&O(t.prototype,n),e}();function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t,n){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._image=t,r._title=n,r}return t=u,(n=[{key:"open",value:function(e,t){this._image.alt=e,this._image.src=t,this._title.textContent=e,P(T(u.prototype),"open",this).call(this)}}])&&q(t.prototype,n),u}(I);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t,n){return(V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return J(e)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleForSubmit=t,n._inputList=n._popup.querySelectorAll(".popup__input"),n._submit=function(e){e.preventDefault(),n._handleForSubmit(n._getInputValues())},n._submitClick=n._submit.bind(J(n)),n._submitButton=n._popup.querySelector(".popup__button-save"),n._defaultSubmitButton=n._submitButton.textContent,n}return t=u,(n=[{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitButton.textContent=e?t:this._defaultSubmitButton}},{key:"setEventListeners",value:function(){V(F(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submitClick)}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){this._popup.querySelector(".popup__form").reset(),V(F(u.prototype),"close",this).call(this)}}])&&A(t.prototype,n),u}(I);function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t){var n=t.title,r=t.subtitle,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=n,this._profileJob=r,this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{title:this._profileName.textContent,subtitle:this._profileJob.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;t&&(this._profileName.textContent=t),n&&(this._profileJob.textContent=n),r&&(this._avatar.src=r)}}])&&M(t.prototype,n),e}();function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t,n){return(K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=X(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Y,Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(r);if(o){var n=X(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return W(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submit=t,n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;K(X(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submit(t,e._card)}))}},{key:"open",value:function(e){this._card=e,K(X(u.prototype),"open",this).call(this)}}])&&G(t.prototype,n),u}(I);function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var te=new r({address:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"dacd008f-f282-42b8-8173-c4cc50ca8555","Content-type":"application/json"}});function ne(e,n){var r=new t({item:e,handleCardClick:function(e,t){pe.open(e,t)},deleteCard:function(){re.open(r)},likeCard:function(){(r.likedCard()?te.dislikeCard(r.getItemId()):te.likeCard(r.getItemId())).then((function(e){r.setLikes(e.likes),r.renderLikes()})).catch((function(e){console.log(e)}))}},n,Y,e._id);return r}Promise.all([te.getUserInfo(),te.getOriginsCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ee(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];console.log(i),console.log(o),se.setUserInfo(o),Y=o._id,ue.renderItems(i)})).catch((function(e){console.log(e)}));var re=new Z(h,(function(e,t){!function(e,t){console.log(t.getItemId()),console.log(e),te.removeCard(t.getItemId()).then((function(){t.removeCard(),re.close()})).catch((function(e){console.log(e)}))}(e,t)})),oe=new H(p,(function(e){oe.renderLoading(!0),console.log(e),te.editUserAvatar(e.link).then((function(e){console.log(e),se.setUserInfo(e),oe.close()})).finally((function(){oe.renderLoading(!1)}))}));re.setEventListeners();var ie=new H(f,(function(e){ie.renderLoading(!0),te.addNewCard(e).then((function(e){console.log(e);var t=ne(e,g).getCard();ue.addItems(t),ie.close()})).finally((function(){ie.renderLoading(!1)})).catch((function(e){console.log(e)}))})),ue=new a({renderer:function(e){var t=ne(e,g).getCard();ue.setItems(t)}},w),ae=new H(l,(function(e){ae.renderLoading(!0),te.postUserInfo(e).then((function(){console.log(e),se.setUserInfo(e),ae.close()})).finally((function(){ae.renderLoading(!1)})).catch((function(e){console.log(e)}))})),se=new z(b);d.addEventListener("click",(function(){ae.open(),le.resetValidation();var e=se.getUserInfo();v.value=e.title,m.value=e.subtitle})),S.addEventListener("click",(function(){ie.open(),ce.resetValidation()})),k.addEventListener("click",(function(){fe.resetValidation(),oe.open()}));var ce=new i(s,y),le=new i(s,_),fe=new i(s,p),pe=new D(E,C,L);ce.enableValidation(),le.enableValidation(),fe.enableValidation(),pe.setEventListeners(),ae.setEventListeners(),oe.setEventListeners(),ie.setEventListeners()}();