// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    // Buat Schema data
    
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Order', OrderSchema)