import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadDocToCloudinary = async (path: string) => {
  try {
    const result = await cloudinary.uploader.upload(path);
    return result.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default uploadDocToCloudinary;
