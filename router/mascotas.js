const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.render('mascotas', {
        arrayMascotas: [
            { 'id':1, 'nombre': 'Canela', 'desc': 'perra color canela'},
            { 'id': 2, 'nombre': 'Pinta', 'desc': 'gata'},
            { 'id': 3, 'nombre': 'Titina', 'desc': 'gata parda' }
        ]
    })
})

module.exports = router