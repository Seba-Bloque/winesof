import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

// Middleware de autenticación con JWT
export const authenticateJWT = (req, res, next) => {
    // Obtener el token JWT del encabezado de autorización
    const authHeader = req.headers.authorization;
    try {
        if (!authHeader) return res.status(401).json({ message: 'No se proporcionó un token de autenticación', status: 401 }); // No se proporcionó un token de autenticación
        const token = authHeader.split(' ')[1];
        if (!token) return res.status(500).json({ message: 'Token invalido' });
        // Verificar y decodificar el token JWT
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) { return res.status(403).json({ message: 'Token de autenticación inválido' }); }
            req.user = decoded.user;
            next();
        });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' })
    }
}
// Middleware para refresh del token
export function refreshToken(req, res, next) {
    const user = req.user;
    // Generar un nuevo token con una nueva fecha de expiración
    const newToken = jwt.sign({ user }, JWT_SECRET, { expiresIn: '1h' });
    // Enviar el nuevo token al cliente
    res.json(newToken);
}
// Middleware para verificar autenticación
export const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
};