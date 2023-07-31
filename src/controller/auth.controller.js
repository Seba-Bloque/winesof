export const getToken = (req, res) => {
	// Obtener el token JWT desde req.user
	const token = req.user.token;
	// Enviar el token como respuesta al cliente
	res.json(token);
}