const express = require('express')
const app = express()
const port = 3000

// establecer motor de plantilla ejs
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.render('index', { titulo: 'mi titulo dinamico perro' })
})

app.get('/servicios', function (req, res) {
    res.render('servicios', { tituloServicios: 'mi titulo dinamico de servicios perro' })
})

app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(port, ()=>{
    console.log('el servidor esta en servicio', port)
})