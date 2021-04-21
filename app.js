const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// establecer motor de plantilla ejs
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))

// rutas web
app.use('/', require('./router/rutasWeb'))
app.use('/mascotas', require('./router/mascotas'))

app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(port, ()=>{
    console.log('el servidor esta en servicio', port)
})