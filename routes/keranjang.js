// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Keranjang = require('../models/Keranjang')

// Create 
// router.post('/', async(req, res) => {
//     // tampung input mahasiswa 
//     const keranjangPost = new Keranjang({
//         jumlah_pemesanan: req.body.jumlah_pemesanan,
//         keterangan: req.body.keterangan,
//         nama: req.body.nama,
//         harga: req.body.harga,
//         gambar: req.body.gambar,
//         best: req.body.best,
//         kategori: req.body.kategori
//     })

//     try {
//         // simpan data 
//         const keranjang = await keranjangPost.save()
//         // response
//         res.json(keranjang)
//     } catch (error) {
//         res.json({message: error})
//     }
// })


function post(req, res, next) {
    const prop = pluralize.singular(req.params.resource)
    req.body[`${prop}${opts.foreignKeySuffix}`] = req.params.id
    req.url = `/${req.params.nested}`
    next()

    return router
    .post('/:resource/:id/:nested', post)
  }

  

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