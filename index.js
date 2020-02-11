// Import stylesheets
// import './style.css';

import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';


class HTMLPasswordExtra extends HTMLInputElement {

  static get is() { return 'extra-password-checked' }

  constructor() {
    super(); 
    this.strange = 0; // 0 = low; 1 = meddium, 2 = h;
  }
  connectedCallback() {
    
    this.addEventListener('change', (ev) => {
      if(this.value.length > 10){
        this.strange = 2;
      } else if (this.value.length > 5) {
        this.strange = 1;
      } else {
        this.strange = 0;
      }

      console.log(this.value);
    })
  }

  disconnectedCallback() { }

  attributeChangedCallback(attrName, oldVal, newVal) { }

  adopedCallback() { }
}

customElements.define(HTMLPasswordExtra.is, HTMLPasswordExtra, {extends: 'input'})
