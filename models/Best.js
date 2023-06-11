// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const BestSchema = mongoose.Schema({
    // Buat Schema data
    kode: {
        type: String,
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

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Best', BestSchema)