// dependencias requerida por la herrameinta stackblitz. 
// si trabajáis en local; esta dependencia no es necesaria.
import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
// --------------------------------------------------------

class HTMLAppPasswordCheckedElement extends HTMLInputElement {

  static get is() { return 'app-password-checked' }

  constructor() {
    super(); 
    this.strong = 0; // 0 = low; 1 = meddium, 2 = h;
  }
  connectedCallback() {
    console.log('sss')
    this.addEventListener('change', (ev) => {
      if(this.value.length > 10){
        this.strong = 2;
      } else if (this.value.length > 5) {
        this.strong = 1;
      } else {
        this.strong = 0;
      }
      console.log(this.value);
    })
  }

  disconnectedCallback() { }

  attributeChangedCallback(attrName, oldVal, newVal) { }

  adopedCallback() { }
}

customElements.define(HTMLAppPasswordCheckedElement.is, HTMLAppPasswordCheckedElement, {extends: 'input'});


