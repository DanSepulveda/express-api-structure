import { CLIENT_URL } from '@config/app';

const resetEmail = (token: string): string => {
  return `
    <html>
      <body>
        <p>Para recuperar su clave, ingrese al siguiente link:</p>

        <a href="${CLIENT_URL.recovery}?token=${token}">
          Cambiar contraseña
        </a>
      </body>
    </html>
  `.toString();
};

export default resetEmail;
