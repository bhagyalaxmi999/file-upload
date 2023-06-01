const fileRoute = require('express').Router()
const FileController = require('../controller/fileController')
const fileMiddleware = require('../middleware/fileMiddleware')

fileRoute.get(`/`, FileController.index)
fileRoute.get(`/file/upload`, FileController.file)

// upload
fileRoute.post(`/api/file/upload`, fileMiddleware.single('myFile'), FileController.singleUpload)

// multiple upload
fileRoute.post(`/api/files/upload`, fileMiddleware.array('myFile'), FileController.singleUpload)


// 
// read files
fileRoute.get(`/api/files`, FileController.readFiles)

// delete files
fileRoute.delete(`/api/file/delete/:id`, FileController.removeFile)

fileRoute.all(`/*`, FileController.pnf)

module.exports = fileRoute