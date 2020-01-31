import {
    LitElement, html, customElement, property
  } from 'lit-element';
import { User, Input } from '@components/models';

// Extend the LitElement base class
@customElement('my-button')
export class ButtonElement extends LitElement implements Input, Omit<User, 'email'> {

    @property()
    name = '';

    @property()
    accounts = [];

    @property()
    value = {};

    reset(): boolean {
        return true;
    }

    render(){
        return html`
          <!-- template content -->
          <p>A paragraph</p>
        `;
      }
}
