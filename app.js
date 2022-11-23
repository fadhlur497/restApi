const express = require('express')
const app = express()
const port = 3000
const cors = require("cors");
const routes = require('./routers/index')
// const bodyParser = require('body-parser');

app.use(express.static('assets'))
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.urlencoded({ extended:true}))
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use('/', routes)

app.listen(port, (req, res) => console.log(`app listening on port ${port}`))