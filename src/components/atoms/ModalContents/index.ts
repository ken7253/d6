import { LitElement, html, unsafeCSS } from 'lit';
import style from './style.css?inline';

const tagName = 'modal-content';

export default class ModalContent extends LitElement {
  static styles = unsafeCSS(style);

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(tagName, ModalContent);
