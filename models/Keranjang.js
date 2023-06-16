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
    products :[{
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
        ketegori: {
            type: String,
            required: true
        },
    },
    ],
})

module.exports = mongoose.model('Keranjang', KeranjangSchema)