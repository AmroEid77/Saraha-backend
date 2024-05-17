import multer from "multer"
import { nanoid } from 'nanoid'

function fileUpload() {
    const storage = multer.diskStorage({});


    function fileFilter(req, file, cb) {
        if (['image/jpeg', 'image/png', 'image/svg+xml', 'image/gif'].includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb("invalid format", false)
        }
    }

    const upload = multer({ fileFilter, storage })
    return upload;

}

export default fileUpload;




// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// })

// const upload = multer({ storage: storage }).single('file')

// return upload;