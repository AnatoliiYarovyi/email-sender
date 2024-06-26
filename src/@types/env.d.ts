/**
 * Here init .env variables for ts
 * Ex. :
 * PROD_PASSWORD: string
 *
 * That is made for ts recognized this values
 */
declare namespace NodeJS {
  export interface ProcessEnv {
    STAGE: string;
    PORT: string;
    SMPT_HOST: string;
    SMPT_PORT: string;
    SMPT_USER: string;
    SMPT_PASSWORD: string;
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
  }
}
