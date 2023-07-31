import bcrypt from "bcrypt";
import { config as dotenv } from 'dotenv';
dotenv();

export const SERVICES_GMAIL = process.env.SERVICES_GMAIL;
export const USER_GMAIL = process.env.USER_GMAIL;
export const PASS_GMAIL = process.env.PASS_GMAIL;
export const port = process.env.PORT || 3000;
export const CLIENTE_ID = process.env.CLIENTE_ID;
export const CLIENTE_SECRETO = process.env.CLIENTE_SECRETO;
const token = process.env.JWT_SECRET; // Token sin encriptar

// Generar JWT secreto y encriptarlo
const generateJwtSecret = async (token) => {
    try {
        const saltRounds = 10;
        const hashedJwtSecret = await bcrypt.hash(token, saltRounds)
        return hashedJwtSecret;
    } catch (error) {
        console.error('Error al generar el jwt_secret:', error);
        throw error;
    }
};

export const JWT_SECRET = await generateJwtSecret(token)
    .then((hashedJwtSecret) => { return hashedJwtSecret; })
    .catch((error) => { throw error; }); // Lanza el error para que pueda ser capturado correctamente
