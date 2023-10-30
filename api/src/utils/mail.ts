import sgMail from "@sendgrid/mail";
import Mustache from "mustache";
import path from "path";
import files from "./files";

export interface sendOptions {
  // from: string;
  // to: string;
  // subject: string;
  // html: string;
  // replyTo?: string;
  // bcc?: string[];
  to: string;
  subject: string;
  link: string;
  template: string;
  user: string;
  label: string;
  attachment?: {
    code: string;
  };
}

export interface mailOptions {
  to: string;
  from: string;
  subject: string;
  html: string;
}

export interface templateOptions {
  name: string;
  data?: any;
}

const mail = {
  send: async (options: sendOptions) => {
    console.log(options)

    const html = await mail.template({
      name: options.template,
      data: {
        user: options.user,
        link: options.link,
        label: options.label,
        code: options.attachment?.code,
        img: `${process.env.SENDGRID_URL}/svg/logo_email.svg`,
      },
    });

    return await mail.internalSend({
      to: options.to,
      from: process.env.SENDGRID_USER ?? "",
      subject: options.subject,
      html,
    })
  },
  internalSend: async (options: mailOptions) => {
    try {
      const apiKey = process.env.SENDGRID_API_KEY || "";
      const to = options.to;
      const from = options.from;

      const mailOptions = {
        to: to,
        from: from,
        subject: options.subject,
        html: options.html,
      }

      if (process.env.NODE_ENV === "test") {
        return true;
      } else {
        sgMail.setApiKey(apiKey);
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

export default mail;
