const http = require("node:http");
const server = http.createServer((peticion, respuesta) => {
	const url = peticion.url;
	if (url == "/") {
		respuesta.end("¡Bienvenido al servidor de node!");
	}
});
const port = 3000;
server.listen(port, () => {
	console.log("Servidor iniciado en el puerto 3000");
});
