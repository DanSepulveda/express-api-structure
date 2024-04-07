export const signupEmail = (token: string): string => {
  return `
  <html>
    <body>
      <p>Bienvenido a ...... Para activar su cuenta y poder ingresar debe hacer click en el siguiente enlace:</p>

      <p>
        https://www.google.com/activate?token=${token}
      </p>
    </body>
  </html>  
    `;
};
