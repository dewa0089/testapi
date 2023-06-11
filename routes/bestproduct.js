// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Bestproduct = require('../models/Bestproduct')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const bestproductPost = new Bestproduct({
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    })

    try {
        // simpan data 
        const bestproduct = await bestproductPost.save()
        // response
        res.json(bestproduct)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const bestproduct = await Bestproduct.find()
        res.json(product)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:bestproductId', async(req, res) => {
    // tampung input mahasiswa 
    const data = {
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    }

    try {
        // update data 
        const bestproduct = await Product.updateOne({_id: req.params.bestproductId}, data)
        // response
        res.json(bestproduct)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:bestproductId', async(req, res) => {
    try {
        // delete data 
        const bestproduct = await Bestproduct.deleteOne({_id: req.params.bestproductId})
        // response
        res.json(bestproduct)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router