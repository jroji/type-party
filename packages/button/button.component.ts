import {
    LitElement, html, customElement, property
  } from 'lit-element';

// Extend the LitElement base class
@customElement('my-button')
export class ButtonElement extends LitElement {

    @property()
    text = '';

    _myButtonClicked() {
      this.dispatchEvent(
        new CustomEvent('my-button-clicked', {
          composed: true,
          bubbles: true,
      }));
    }

    render(){
        return html`
          <!-- template content -->
          <button @click="${this._myButtonClicked}"><slot>${this.text}</slot></button>
        `;
      }
}
