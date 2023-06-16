// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Keranjang = require('../models/Keranjang')
const Products = require('../models/Products')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 

    try {
        // simpan data 
        const keranjang = await Keranjang.save({nama:req.params.nama})
        // response
        res.json(keranjang)
    } catch (error) {
        res.json({message: error})
    }
})


// Read
router.get('/', async(req, res) => {
    try {
        const keranjang = await Keranjang.find()
        res.json(keranjang)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:keranjangId', async(req, res) => {
    // tampung input mahasiswa 
    const data = {
       
    }

    try {
        // update data 
        const keranjang = await Keranjang.updateOne({_id: req.params.keranjangId}, data)
        // response
        res.json(keranjang)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:keranjangId', async(req, res) => {
    try {
        // delete data 
        const keranjang = await Keranjang.deleteOne({_id: req.params.keranjangId})
        // response
        res.json(keranjang)
    } catch (error) {
        res.json({message: error})
    }
})



module.exports = router