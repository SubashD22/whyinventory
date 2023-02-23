const upload = require('../config/firebaseStorageConfig');
const express = require('express');
const router = express.Router();
const {uploadProduct} = require('../controllers/productController');

router.post('/newproduct',upload.array('image'),uploadProduct)

module.exports = router
