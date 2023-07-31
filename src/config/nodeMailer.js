import nodemailer from 'nodemailer';
import { PASS_GMAIL, SERVICES_GMAIL, USER_GMAIL } from './config.js';

export const transporter = nodemailer.createTransport({
    service: SERVICES_GMAIL,
    auth: {
        user: USER_GMAIL,
        pass: PASS_GMAIL,
    },
});
