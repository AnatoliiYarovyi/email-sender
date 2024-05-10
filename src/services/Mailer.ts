import nodemailer from 'nodemailer';
import { otpTemplate } from '@/templates/otp';
import * as aws from '@aws-sdk/client-ses';
import { SES } from '@aws-sdk/client-ses';

const { SMPT_HOST, SMPT_PORT, SMPT_USER, SMPT_PASSWORD } = process.env;

export class MailService {
  private transporterAws: nodemailer.Transporter;
  private transporter: nodemailer.Transporter;

  constructor(ses: SES) {
    this.transporterAws = nodemailer.createTransport({
      SES: { ses, aws },
    });

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

  async sendOtpByAws(email: string, otpCode: number) {
    try {
      const template = otpTemplate(otpCode);

      await this.transporterAws.sendMail(
        {
          from: 'ses@apps-anatolii.win',
          to: email, // wokr email
          subject: 'OTP code',
          text: '',
          html: template,
        },
        (err, info) => {
          console.log(info.envelope);
          console.log(info.messageId);
        },
      );
    } catch (error) {
      return error;
    }
  }
}
