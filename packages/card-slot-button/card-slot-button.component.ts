import {
  LitElement, html, customElement, property, css
} from 'lit-element';

import '@components/button';

// Extend the LitElement base class
@customElement('my-card-slot-button')
export class CardButtonSlotElement extends LitElement {

  @property({type: String, attribute: 'button-name'})
  buttonName = 'button';

  public static styles = [
    css`
    :host {
      font-family: arial;
      display: block;
      border-radius: 2px;
      padding: 16px;
      border: none;
      box-shadow: 1px 1px 3px 2px #cecece;
      display:flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      margin: 0;
    }
    * {
      box-sizing: border-box;
    }
    `,
  ];

  render() {
    return html`
      <slot></slot>
      <my-button>${this.buttonName}</my-button>
    `;
  }
}
