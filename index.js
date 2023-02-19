const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended:true}));
app.use(bodyparser.json());

app.post('/api/postmul', (req,res) => {
    const {num1, num2} = req.body;
    if (!num1 || !num2) {
        res.status(400).json({error: 'Debes proporcionar dos numeros'});
        return;
    }

    const suma = parseInt(num1) * parseInt(num2)

    res.json({resultado : suma});
});

app.get('/api/myinfo', (req,res) => {
    res.json({
        name: 'Henrry David Bran Velasquez',
        id: '201314439'
    })
})

const PORT= 3000;
app.listen(PORT,() => {
    console.log('Servidor iniciado en el puerto ${PORT}')
});