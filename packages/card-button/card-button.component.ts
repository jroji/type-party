import {
  LitElement, html, customElement, property, css
} from 'lit-element';

import '@components/button';

// Extend the LitElement base class
@customElement('my-card-button')
export class CardButtonElement extends LitElement {

  @property({type: String})
  header = 'This is the cards title';

  @property({type: String})
  text = 'Text inside our card';

  @property({type: String, attribute: 'button-name'})
  buttonName = 'button';

  public static styles = [
    css`
    :host {
      display: block;
      border: 1px black solid;
      border-radius: 2px;
      padding: 16px;
    }
    * {
      box-sizing: border-box;
    }
    `,
  ];

  render() {
    return html`
      <h1>${this.header}</h1>
      <slot>
        <p>${this.text}</p>
      </slot>
      <my-button>${this.buttonName}</my-button>
    `;
  }
}
