const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Despliegue completado!\n');
});
server.listen(3000, () => console.log('Servidor en puerto 3000'));
