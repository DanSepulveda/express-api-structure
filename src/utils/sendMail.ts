import type { SentMessageInfo } from 'nodemailer';
import transporter from '../config/transporter';
import { NODEMAILER_CREDENTIALS } from '../config/constants';

interface MailConfig {
  recipients: string | string[];
  subject: string;
  template: string;
  text?: string;
}

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
