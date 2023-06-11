// (1) definisikan module, middleware
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

// (6) middleware body-parser
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors())

// (7) import routes

const productsRoutes = require('./routes/products')
const keranjangRoutes = require('./routes/keranjang')
const orderRoutes = require('./routes/order')
const makananRoutes = require('./routes/makanan')
const minumanRoutes = require('./routes/minuman')
const bestRoutes = require('./routes/best')

// (8) app.use (mendaftarkan middleware baru ke Express)
app.use('/products', productsRoutes)
app.use('/keranjang', keranjangRoutes)
app.use('/order', orderRoutes)
app.use('/makanan', makananRoutes)
app.use('/minuman', minumanRoutes)
app.use('/Best', bestRoutes)


// (3) koneksi ke database mongodb
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

    // handle error
    db.on('error', console.error.bind(console, 'Error Establishing a Database Connection?'))
    // handle success
    db.once('open', () => {
        console.log('Database is connected')
    })

// (2) listen port, dan buat callback dengan output console.log
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})