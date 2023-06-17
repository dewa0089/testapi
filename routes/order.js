// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Order = require('../models/Order')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const orderPost = new Order(req.body)

    try {
        // simpan data 
        const order = await orderPost.save()
        // response
        res.json(order)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const order = await Order.find()
        res.json(order)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:orderId', async(req, res) => {
    // tampung input mahasiswa 
    const data = {
       
    }

    try {
        // update data 
        const order = await Order.updateOne({_id: req.params.orderId}, data)
        // response
        res.json(order)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:orderId', async(req, res) => {
    try {
        // delete data 
        const order = await Order.deleteOne({_id: req.params.orderId})
        // response
        res.json(order)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router