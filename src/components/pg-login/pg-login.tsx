import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pg-login',
  styleUrl: 'pg-login.css',
  shadow: true,
})
export class PgLogin {

  render() {
    return (
      <Host>
        <div class="login">
          <pg-input type="email" label="Email" inputId="email"></pg-input>
          <pg-input type="password" label="Contraseña" inputId="passwd"></pg-input>
          <div class="button-group">
            <pg-button buttonText='Aceptar' buttonType='success'></pg-button>
            <pg-button buttonText='Cancelar' buttonType='danger'></pg-button>
          </div>
        </div>
      </Host>
    );
  }

}
