export const otpTemplate = (otpCode: number) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Code</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #007bff;
    }

    h3 {
      font-size: 24px;
      margin-bottom: 20px;
      color: #333;
    }

    p {
      margin-bottom: 20px;
      line-height: 1.5;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Ваш код:</h1>
    <h3>${otpCode}</h3>
    <p>Это одноразовый код, который вы можете использовать для входа в личный кабинет.</p>
  </div>
</body>

</html>`;
};
