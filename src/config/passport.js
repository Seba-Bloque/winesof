import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import prisma from "../prisma.js";
import jwt from 'jsonwebtoken';
import { CLIENTE_ID, CLIENTE_SECRETO, JWT_SECRET } from "./config.js";
import roles from '../helpers/roles.helpers.js';

passport.use(new GoogleStrategy({
    clientID: CLIENTE_ID,
    clientSecret: CLIENTE_SECRETO,
    callbackURL: '/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value;
    let role = roles.user;
    if (email === 'moderator@winesof.com') {
        role = roles.moderator;
    } else if (email === 'sebastiansaavedra770@gmail.com') {
        role = roles.admin
    }
    const data = {
        googleId: profile.id,
        displayName: profile.displayName,
        email: email,
        image: profile.photos[0].value,
        role: role
    }
    const user = await prisma.user.findUnique({ where: { googleId: data.googleId } });
    if (!user) {
        const newUser = await prisma.user.create({ data: data });
        // Generar el token JWT con la información del usuario
        const token = jwt.sign({ newUser },JWT_SECRET,{ expiresIn: '1h' });
        return done(null, { token, profile });
    }
    // Generar el token JWT con la información del usuario
    const token = jwt.sign({ user },JWT_SECRET,{ expiresIn: '1h' });
    done(null, { token, profile });
}));

// Almacenar usuario
passport.serializeUser((user, done) => {
    done(null, user);
});
// Acceso a la información del usuario en las rutas y controladores
passport.deserializeUser(async (userId, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { googleId: userId.profile.id } });
        if (!user) return done(null, false); // El usuario no existe, pasar `false` al callback done
        done(null, user);
    } catch (error) {
        done(error);
    }
});

export default passport;