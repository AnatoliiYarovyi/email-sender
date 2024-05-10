import 'dotenv/config';
import * as aws from '@aws-sdk/client-ses';

// services
import { MailService } from './services/Mailer';

// controllers
import { MailerController } from './controllers/Mailer';

// others
import { App } from './app';

const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env;

async function main() {
  try {
    const ses = new aws.SES({
      apiVersion: '2010-12-01',
      region: 'us-east-1',
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });

    // services
    const mailService = new MailService(ses);

    // controllers
    const testController = new MailerController(mailService);

    const port = Number(process.env.PORT) || 5000;
    const app = new App(port, [testController]);

    app.listen();
  } catch (error: any) {
    console.error(error);
  }
}

main();
