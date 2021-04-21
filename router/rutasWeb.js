const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.render('index', { titulo: 'mi titulo dinamico perro' })
})
router.get('/servicios', function (req, res) {
    res.render('servicios', { tituloServicios: 'mi titulo dinamico de servicios perro' })
})

module.exports = router