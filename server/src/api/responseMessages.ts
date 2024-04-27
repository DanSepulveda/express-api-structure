export const AUTH_SUCCESS = {
  signup: 'User created successfully',
  verification: 'Account verified successfully',
  login: 'User logged in successfully',
  logout: 'User logged out successfully',
  sendResetEmail: 'Reset email sent successfully',
  sendVerificationEmail: 'Verification email sent successfully',
  resetPassword: 'Password modified successfully'
};

export const USER_ERROR = {
  registered: 'Email already in use',
  unregistered: 'User is not registered',
  verified: 'Account already verified',
  unverified: 'Verification needed',
  disabled: 'Account disabled',
  wrongPassword: 'Wrong password',
  noMatch: "Passwords don't match"
};

export const TOKEN_ERROR = {
  invalid: 'Invalid token',
  expired: 'Expired token',
  reuse: 'Invalidated token'
};
