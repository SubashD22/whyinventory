const FirebaseStorage = require('multer-firebase-storage');
const multer = require('multer');
const upload = multer({storage: FirebaseStorage({
    bucketName:'whyinventory.appspot.com',
    credentials:{ 
         projectId: process.env.PROJECT_ID,
         privateKey: process.env.PRIVATE_KEY,
         clientEmail: process.env.CLIENT_EMAIL},
    directoryPath:'Products',
    unique: true,
    public: true,
})
})

module.exports = upload