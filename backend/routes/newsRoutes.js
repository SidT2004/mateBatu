const  express =require('express');
const { addNews } =require('../controllers/newsController.js');
const multer =require('multer');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../fronend/src/assets"); // Path where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique file names
  },
});

const upload = multer({ storage });

router.post('/add-news', upload.single('file'), addNews);

export default router;
