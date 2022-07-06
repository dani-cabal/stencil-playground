import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pg-input',
  styleUrl: 'pg-input.css',
  shadow: true,
})
export class PgInput {

  @Prop() type: string;
  @Prop() inputId: string;
  @Prop() label: string;

  render() {
    return (
      <Host>
        {this.label &&
          <label htmlFor={this.inputId}>{this.label}</label>
        }
        <input type={this.type} id={this.inputId} />
      </Host>
    );
  }

}
