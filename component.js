// dependencias requerida por la herrameinta stackblitz. 
// si trabajáis en local; esta dependencia no es necesaria.
import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
// --------------------------------------------------------
class HTMLAppPasswordCheckedElement extends HTMLElement {

      static get is() { return 'app-password-checked' }

      constructor() {
        super(); // always call super() first in the constructor.
        this.shadow = this.attachShadow({mode: 'open'});
        this.strong = 0;
      }
      connectedCallback() {
        this.shadow.innerHTML = `
        <input type="password" is="app-password-checked" id="input"><br/>
        <span>strong level:</span><span id="value">${this.strong}</span>`;
        this.$input = this.shadow.querySelector('#input');
        this.$value = this.shadow.querySelector('#value');
        this.$input.addEventListener('change', this, false);
      }

      disconnectedCallback(){
        this.$input.removeEventListener(this);
      }

      handleEvent(ev) {
        switch(ev.type){
          case 'change':
            this.$value.innerText = this.strong = this.validate(ev.target.value.length);
          break;
        }
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

    customElements.define(HTMLAppPasswordCheckedElement.is, HTMLAppPasswordCheckedElement);