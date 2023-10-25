import sgMail from "@sendgrid/mail";
import Mustache from "mustache";
import path from "path";
import files from "./files";

export interface mailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  bcc?: string[];
}

export interface templateOptions {
  name: string;
  data?: any;
}

const main = {
  send: async (options: mailOptions) => {
    try {
      const to = options.to;
      const from = options.from;
      // const replyTo = options.replyTo || process.env.SENDGRID_REPLY_TO;
      // const bcc = options.bcc ?? [];

      const mailOptions = {
        to: to,
        from: from || process.env.SENDGRID_SENDER_EMAIL || '',
        subject: options.subject,
        html: options.html,
      }

      if (process.env.NODE_ENV === "test") {
        return true;
      } else {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
        const [result] = await sgMail.send(mailOptions);
        return +result.statusCode === 202;
      }

    } catch (error) {
      console.error('Error sending email', error);
      return false;
    }
  },
  template: async(options: templateOptions): Promise<string> => {
    const { name, data } = options;
    const templatePath = path.join(__dirname, `../../src/views/emails/${name}.mustache`);

    const template = await files.read(templatePath);
    const html = Mustache.render(template, data);

    return html;
  }
};

export default main;
