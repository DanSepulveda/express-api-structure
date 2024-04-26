import type { MailConfig } from './interfaces';
import type { SentMessageInfo } from 'nodemailer';
import transporter from '@config/transporter';
import { NODEMAILER } from '@config/app';
import signupEmail from '@components/auth/templates/signup';
import resetEmail from '@components/auth/templates/reset';

export const sendMail = async (
  config: MailConfig
): Promise<SentMessageInfo> => {
  const info = await transporter.sendMail({
    from: `${NODEMAILER.displayedName} <${NODEMAILER.credentials.user}>`,
    to: config.recipients,
    subject: config.subject,
    html: config.template,
    text: config.text
  });

  // TODO: handle error when sending mail fails
  return info;
};

export const sendActivationLink = async (
  email: string,
  token: string
): Promise<void> => {
  const template = signupEmail(token);
  await sendMail({
    recipients: email,
    subject: 'Activación de cuenta',
    template
  });
};

export const sendResetLink = async (
  email: string,
  token: string
): Promise<void> => {
  await sendMail({
    recipients: email,
    subject: 'Recuperar contraseña',
    template: resetEmail(token)
  });
};
