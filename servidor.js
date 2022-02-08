const http = require ('http')

const PORT = 8080

const server = app.get('/products.text', (req, res) => {
   console.log('GET request recibido')

   res.json(producto)
}
