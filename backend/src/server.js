const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack-9:tj1ds17siufam@omnistack-9-oxep0.mongodb.net/semana09?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true,
});

//GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// 
app.use(express.json());
app.use(routes);

app.listen(3333);