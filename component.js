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
        this.addEventListener('change', (ev) => {
          this.strong = this.validate(this.value.length);
        })
      }

      validate(length){
        let strong;
        if(length > 10){
          strong = 2;
        } else if (length > 5) {
          strong = 1;
        } else {
          strong = 0;
        }

        return strong;
      }
    }

    customElements.define(HTMLAppPasswordCheckedElement.is, HTMLAppPasswordCheckedElement, {extends: 'input'});