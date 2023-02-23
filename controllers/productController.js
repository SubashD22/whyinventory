const Product = require('../models/productSchema');

const uploadProduct = async(req,res)=>{
    console.log(req.files[0].publicUrl)
    res.status(200).send('ok')
}
module.exports = {
    uploadProduct
}