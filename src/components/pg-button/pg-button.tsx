import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pg-button',
  styleUrl: 'pg-button.css',
  shadow: true,
})
export class PgButton {
  @Prop() buttonText: string;
  @Prop() buttonType: 'success' | 'danger';

  render() {
    return (
      <Host>
        <button class={`btn ${this.buttonType}`}>{this.buttonText}</button>
      </Host>
    );
  }

}
