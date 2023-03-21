import { OAuth2Client } from "google-auth-library";

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const callback_url = `${process.env.SERVER_DOMAIN}:${process.env.PORT}${process.env.CLIENT_CALLBACK_URL}`;

export const client = new OAuth2Client(client_id, client_secret, callback_url);
