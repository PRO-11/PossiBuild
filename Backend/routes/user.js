const express = require('express');

const router = express.Router();
const {
  uploadProfile,
 getall
} = require('../controllers/user');

const multer = require('multer');

const storage = multer.diskStorage({});
const storage1 = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file!', false);
  }
};
const videoStorage= (req, file, cb) => {
  if (file.mimetype === "video/mp4") {
    cb(null, path.join(__dirname, "../files"));
  } else {
    cb({ message: "This file is not in video format." }, false);
  }
};
 const uploads = multer({ storage,videoStorage });
var multipleupload=uploads.fields([{name:'image',maxCount:10},{name:'video',maxCount:10}])
router.post(
  '/submit',
  multipleupload,
  uploadProfile
);
router.get(
  '/allthumbnails',
  getall
);

module.exports = router;