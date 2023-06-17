// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    // Buat Schema data
    nama:{
        type: String,
        required : true
    },
    nomor_meja:{
        type: String,
        required : true
    },
    keranjangs:[{
            jumlah_pemesanan:{
                type: String,
            },
            keterangan: {
                type:String
            },
            products :{
                _id: {
                    type: String,
                  },
                nama: {
                    type: String,
                },
                harga: {
                    type: Number,
                },
                gambar: {
                    type: String,
                },
                ketegori: {
                    type: String,
                },
            },
    }],
})

module.exports = mongoose.model('Order', OrderSchema)