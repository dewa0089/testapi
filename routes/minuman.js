// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Minuman = require('../models/Minuman')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const minumanPost = new Minuman({
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    })

    try {
        // simpan data 
        const minuman = await minumanPost.save()
        // response
        res.json(minuman)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const minuman = await Minuman.find()
        res.json(minuman)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:minumanId', async(req, res) => {
    // tampung input mahasiswa 
    const data = {
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    }

    try {
        // update data 
        const minuman = await Minuman.updateOne({_id: req.params.minumanId}, data)
        // response
        res.json(minuman)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:minumanId', async(req, res) => {
    try {
        // delete data 
        const minuman = await Minuman.deleteOne({_id: req.params.minumanId})
        // response
        res.json(minuman)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router