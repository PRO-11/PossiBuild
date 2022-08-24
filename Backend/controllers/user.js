
const cloudinary = require('../helper/imageUpload');
const User=require('../Models/model')
const sharp = require('sharp');
exports.uploadProfile = async (req, res) => {
    const { title,description} = req.body;
    
  try {
    const image = await cloudinary.uploader.upload(req.files.image[0].path, {
        folder: "thumbnails_possi",
        width: 150,
       crop: "scale", 
    });
    const video = await cloudinary.uploader.upload(req.files.video[0].path, {
        folder: "thumbnails_possi",
         resource_type: "video" 
    });
    const user = await User.create({
       title,
       description,
       thumbnail: {
          public_id: image.public_id,
          url:image.secure_url
        },
        video:{
            public_id: video.public_id,
          url:video.secure_url
        }
      });
    res.redirect('http://localhost:3000/allthumbnail')
  } catch (error) {
    console.log('Error while uploading profile image', error.message);
  }
};

exports.getall = async (req, res) => {
try {
  const data=await User.find();
  res.send(data)
} catch (error) {
  console.log('Error while uploading profile image', error.message);
}
};


