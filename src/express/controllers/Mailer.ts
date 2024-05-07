import { RequestHandler } from 'express';

import { Controller } from './Controller';

import { IErrorResponse, IOkResponse, errorResponse, okResponse } from '../api/baseResponses';
import { MailService } from '../services/Mailer';

export class MailerController extends Controller {
  constructor(readonly mailService: MailService) {
    super('/mailer');

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/send-otp', this.link({ route: this.sendOtp }));
  }

  private sendOtp: RequestHandler<
    {},
    IErrorResponse | IOkResponse<string>,
    {},
    { email?: string; otpCode?: string }
  > = async (req, res) => {
    const { email, otpCode } = req.query;

    if (!email || !otpCode) {
      return res.status(400).json(errorResponse(400, 'Email and OTP required'));
    }
    await this.mailService.sendOtp(email, +otpCode);

    return res.status(200).json(okResponse('The email has been sent'));
  };
}
