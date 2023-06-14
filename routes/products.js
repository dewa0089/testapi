// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Products = require('../models/Products')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const productsPost = new Products({
        kategori: req.body.kategori,
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar,
        best: req.body.best
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

router.get('/:_id', async (req, res) => {
    try{
        const products = await Products.findById(req.params._id);
        res.json(products)
    }
    catch(error){
        res.status(500).json({message: error.message})
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

router.get('/', async (req, res) => {
    const filters = req.query;
    const filteredUsers = Products.filter(user => {
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredUsers);
  });
    
  // Start server on PORT 5000
  app.listen(5000, () => {
    console.log('Server started!');
  });

//Get id
router.get('/:best/b', async (req, res) => {
    try{
        const products = await Products.find({best:req.params.best});
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
        best: req.body.best
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

router.delete('/', async(req, res) => {
    try {
        // delete data 
        const products = await Products.deleteOne()
        // response
        res.json(products)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router