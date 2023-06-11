// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Best = require('../models/Best')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const bestPost = new Best({
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    })

    try {
        // simpan data 
        const best = await bestPost.save()
        // response
        res.json(best)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const best = await Best.find()
        res.json(best)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:bestId', async(req, res) => {
    // tampung input mahasiswa 
    const data = {
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    }

    try {
        // update data 
        const best = await Best.updateOne({_id: req.params.bestId}, data)
        // response
        res.json(best)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:bestId', async(req, res) => {
    try {
        // delete data 
        const best = await Best.deleteOne({_id: req.params.bestId})
        // response
        res.json(best)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router