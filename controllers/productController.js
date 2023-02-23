const Product = require('../models/productSchema');

const uploadProduct = async(req,res)=>{
    const{title,description,quantity,price} =req.body
    try {
        const newProduct = await Product.create({
            title,
            description,
            image:req.files[0].publicUrl,
            quantity: parseInt(quantity),
            price: parseFloat(price)
        });
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = {
    uploadProduct
}