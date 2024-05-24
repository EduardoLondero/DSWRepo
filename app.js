const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

app.use(express.static('public'));

// Definir una ruta de ejemplo
app.get('/pagina', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});