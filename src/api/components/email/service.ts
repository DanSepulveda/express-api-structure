import type { MailConfig } from './types';
import type { SentMessageInfo } from 'nodemailer';
import transporter from '../../../config/transporter';
import { NODEMAILER_CREDENTIALS } from '../../../config/constants';
import signupEmail from '../auth/templates/signup';
import recoveryEmail from '../auth/templates/recovery';

export const sendMail = async (
  config: MailConfig
): Promise<SentMessageInfo> => {
  const info = await transporter.sendMail({
    from: NODEMAILER_CREDENTIALS.user,
    to: config.recipients,
    subject: config.subject,
    html: config.template,
    text: config.text
  });

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

export const sendRecoveryLink = async (
  email: string,
  token: string
): Promise<void> => {
  await sendMail({
    recipients: email,
    subject: 'Recuperar contraseña',
    template: recoveryEmail(token)
  });
};
