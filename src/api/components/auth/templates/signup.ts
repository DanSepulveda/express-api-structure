import { CLIENT_URL } from '../../../../config/app';

const signupEmail = (token: string): string => {
  return `
    <html>
      <body>
        <p>Bienvenido a "Nombre de aplicación". Para activar su cuenta y poder ingresar debe hacer click en el siguiente enlace:</p>

        <a href="${CLIENT_URL.verification}?token=${token}">
          Activar cuenta
        </a>
      </body>
    </html>  
  `.toString();
};

export default signupEmail;
