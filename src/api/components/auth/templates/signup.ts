export const signupEmail = (token: string): string => {
  return `
  <html>
    <body>
      <p>Bienvenido a ...... Para activar su cuenta y poder ingresar debe hacer click en el siguiente enlace:</p>

      <p>
        http://localhost:4000/api/v1/auth/verify-account?token=${token}
      </p>
    </body>
  </html>  
    `;
};
