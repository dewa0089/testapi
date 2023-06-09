// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const ProductsSchema = mongoose.Schema({
    // Buat Schema data
    kategori: {
        type: Number,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    gambar: {
        type: String,
        required: true
    },
    best: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Products', ProductsSchema)