export interface MailConfig {
  recipients: string | string[];
  subject: string;
  template: string;
  text?: string;
}
