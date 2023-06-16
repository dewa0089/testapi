// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const KeranjangSchema = mongoose.Schema({
    // Buat Schema data
    jumlah_pemesanan:{
        type: String,
        required : true
    },
    keterangan:{
        type: String,
        required : true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Keranjang', KeranjangSchema)