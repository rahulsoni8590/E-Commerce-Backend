import multer from "multer"

const storageConfig = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "./public/uploads")
    },
    filename:function(req,file,cb){
        const name = new Date().toISOString().replace(/:/g, '_') + file.originalname;
        cb(null, name)
    }
})

const uploadFile = multer({storage:storageConfig})

export default uploadFile;