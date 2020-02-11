// Import stylesheets
// import './style.css';

import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
class AppDrawer extends HTMLElement {

  static get is() { return 'app-drawer' }

  //static get observedAttributes() {
    //return ['disabled', 'open'];
  //}
  constructor() {
    super(); // always call super() first in the constructor.
    this.innerHTML = "hello world!";
  }
  connectedCallback() { }

  disconnectedCallback() { }

  attributeChangedCallback(attrName, oldVal, newVal) { }

  adopedCallback() { }
}

customElements.define(AppDrawer.is, AppDrawer)
