// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Makanan = require('../models/Makanan')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const makananPost = new Makanan({
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    })

    try {
        // simpan data 
        const makanan = await makananPost.save()
        // response
        res.json(makanan)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const makanan = await Makanan.find()
        res.json(makanan)
    } catch (error) {
        res.json({message: error})
    }
})


//Get id
router.get('/makanan/:_id', async (req, res) => {
    try{
        const makanan = await Makanan.findById(req.params._id);
        res.json(makanan)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})




// Update 
router.put('/:makananId', async(req, res) => {
    // tampung input mahasiswa 
    const data = {
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    }

    try {
        // update data 
        const makanan = await Makanan.updateOne({_id: req.params.makananId}, data)
        // response
        res.json(makanan)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:makananId', async(req, res) => {
    try {
        // delete data 
        const makanan = await Makanan.deleteOne({_id: req.params.makananId})
        // response
        res.json(makanan)
    } catch (error) {
        res.json({message: error})
    }
})





module.exports = router