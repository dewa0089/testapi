// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Products = require('../models/Products')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const productsPost = new Products({
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    })

    try {
        // simpan data 
        const products = await productsPost.save()
        // response
        res.json(products)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const products = await Products.find()
        res.json(products)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:productsId', async(req, res) => {
    // tampung input mahasiswa 
    const data = {
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    }

    try {
        // update data 
        const products = await Products.updateOne({_id: req.params.productsId}, data)
        // response
        res.json(products)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:productsId', async(req, res) => {
    try {
        // delete data 
        const products = await Products.deleteOne({_id: req.params.productsId})
        // response
        res.json(products)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router