// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const KeranjangSchema = mongoose.Schema({
    // Buat Schema data
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Keranjang', KeranjangSchema)