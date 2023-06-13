// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Products = require('../models/Products')
const { Db } = require('mongodb')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const productsPost = new Products({
        kategori: req.body.kategori,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar,
        identitas: req.body.identitas
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


//Get id
router.get('/:kategori', async (req, res) => {
    try{
        const products = await Products.findById(req.params.kategori);
        res.json(products)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/:kategori', async (req, res) => {
    try{
        const products = await Products.find(req.params.kategori);
        res.json(products)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})



router.get('/:_id', async (req, res) => {
    try{
        const products = await Products.findById(req.params._id);
        res.json(products)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


// Update 
router.put('/:productsId', async(req, res) => {
    // tampung input mahasiswa 
    const data = {
        kategori: req.body.kategori,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar,
        identitas: req.body.identitas
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