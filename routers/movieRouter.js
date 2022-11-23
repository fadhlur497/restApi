const router = require('express').Router()
const Controller = require('../controller/controller')


const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './assets')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})
router.get('/', Controller.getMovie)
router.post('/add', upload.single('image'),Controller.postMovie)
router.put('/:id/edit', upload.single('image'),Controller.putMovie)

module.exports = router