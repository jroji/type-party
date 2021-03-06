import {
  LitElement, html, customElement, property, css
} from 'lit-element';

import '@components/button';
import { User } from '../models';

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
      <h1>${this.header}</h1>
      <slot>
        <p>${this.text}</p>
      </slot>
      <my-button>${this.buttonName}</my-button>
    `;
  }
}
