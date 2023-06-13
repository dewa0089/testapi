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
    identitas:{
        type: String,
        required: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Products', ProductsSchema)