// (1) definisikan module, middleware
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// (6) middleware body-parser
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// (7) import routes

const productRoutes = require('./routes/product')
const keranjangRoutes = require('./routes/keranjang')
const orderRoutes = require('./routes/order')
const bestproductRoutes = require('./routes/bestproduct')
const makananRoutes = require('./routes/makanan')
const minumanRoutes = require('./routes/minuman')

// (8) app.use (mendaftarkan middleware baru ke Express)
app.use('/product', productRoutes)
app.use('/keranjang', keranjangRoutes)
app.use('/order', orderRoutes)
app.use('/bestproduct', bestproductRoutes)
app.use('/makanan', makananRoutes)
app.use('/minuman', minumanRoutes)

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