import { otpTemplate } from '@/templates/otp';
import nodemailer from 'nodemailer';

const { SMPT_HOST, SMPT_PORT, SMPT_USER, SMPT_PASSWORD } = process.env;

export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      // @ts-ignore
      host: SMPT_HOST,
      port: SMPT_PORT,
      secure: true,
      auth: {
        user: SMPT_USER,
        pass: SMPT_PASSWORD,
      },
    });
  }

  async sendOtp(email: string, otpCode: number) {
    try {
      const template = otpTemplate(otpCode);

      await this.transporter.sendMail({
        from: SMPT_USER,
        to: email, // wokr email
        subject: 'OTP code',
        text: '',
        html: template,
      });
    } catch (error) {
      return error;
    }
  }
}
