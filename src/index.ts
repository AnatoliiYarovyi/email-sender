import 'dotenv/config';

// services
import { MailService } from './services/Mailer';

// controllers
import { MailerController } from './controllers/Mailer';

// others
import { App } from './app';

async function main() {
  try {
    // services
    const mailService = new MailService();

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
