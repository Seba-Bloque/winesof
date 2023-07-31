import { Router } from "express";
import prisma from "../prisma.js";
import { USER_GMAIL } from "../config/config.js";
import { transporter } from "../config/nodeMailer.js";
const router = Router();

// Ruta para el registro de usuarios
router.post('/register', async (req, res) => {
    const { email, password, role } = req.body;
    const data = { email, password, role }
    try {
        if (await prisma.user.findUnique({ where: { email: email } })) return res.status(409).json({ error: 'El usuario con el email ya existe' });
        const user = await prisma.user.create({ data: data });
        // Enviar correo de verificación
        const verificationCode = "123-456-789";
        // Construye la URL de verificación utilizando la base de la URL de tu aplicación
        const verificationUrl = `https://tu_app.com/verify/${encodeURIComponent(user.email)}/${verificationCode}`;
        const mailOptions = {
            from: USER_GMAIL,
            to: user.email,
            subject: 'Verificación de Correo Electrónico',
            text: `Para verificar tu correo electrónico, haz clic en el siguiente enlace: ${verificationUrl}`,
        };

        transporter.sendMail(mailOptions, (error) => {
            if (error) return res.status(500).json({ error: 'Error al enviar el codigo de verificacion' });
            res.json({ message: 'Usuario registrado correctamente. El codigo de verificacion fue enviado' });
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al intentar registrar el usuario' });
    }
});
// Verifivar codigo
router.get('/verify', async (req, res) => {
    try {
        const data = req.query;
        console.log(data);
        // Buscar el usuario por el código de verificación
        const user = prisma.user.findUnique({ where: { email: req.body.email } });
        console.log(user);
        if (!user) return res.status(404).json({ error: 'Usuario no registrado' });
        // Actualizar el estado de verificación del usuario en la base de datos
        if (user) { user.isVerified = true; }

        res.json({ message: 'Usuario verificado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al intentar verificar al usuario' });
    }
});

export default router;