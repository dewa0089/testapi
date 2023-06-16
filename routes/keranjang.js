// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Keranjang = require('../models/Keranjang')
const Products = require('../models/Products')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const keranjangPost = new Keranjang({
        jumlah_pemesanan: req.params.jumlah_pemesanan,
        keterangan: req.params.keterangan,
        Products:{
            best: req.params.best,
            gambar: req.params.gambar,
            createdAt: req.params.createdAt, 
            harga: req.params.harga,
            kategori: req.params.kategori,
            nama: req.params.nama,
            __v: req.params.__v,
            _id: req.params._id
        }
    })

    try {
        // simpan data 
        const keranjang = await keranjangPost.save()
        // response
        res.json(keranjang)
    } catch (error) {
        res.json({message: error})
    }
})

//Get id
router.get('/:kategori/k', async (req, res) => {
    try{
        const products = await Products.find({kategori:req.params.kategori});
        res.json(products)
    }
    catch(error){
        res.status(500).json({message: error.message})
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