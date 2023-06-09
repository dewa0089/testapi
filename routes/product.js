// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Product = require('../models/Product')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const productPost = new Product({
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    })

    try {
        // simpan data 
        const product = await productPost.save()
        // response
        res.json(product)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const product = await Product.find()
        res.json(product)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:productId', async(req, res) => {
    // tampung input mahasiswa 
    const data = {
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    }

    try {
        // update data 
        const product = await Product.updateOne({_id: req.params.productId}, data)
        // response
        res.json(product)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:productId', async(req, res) => {
    try {
        // delete data 
        const product = await Product.deleteOne({_id: req.params.productId})
        // response
        res.json(product)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router