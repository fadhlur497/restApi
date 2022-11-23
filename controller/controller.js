const { Movie } = require('../models')
class Controller{
    static getMovie(req, res){
        Movie.findAll()
        .then(data => {
            // res.status(200).json(data)
            res.render('movie', { data })
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }
    static postMovie(req, res){
        let {title, genre, released, image} = req.body
        // let  { image }  = req.file
        Movie.create({title, genre, released, image: req.file.originalname})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }
    static putMovie(req, res){
        let id = req.params.id
        let {title, genre, released, image} = req.body
        Movie.update({title, genre, released, image: req.file.originalname}, {where : {id}, returning : true})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }
}

module.exports = Controller