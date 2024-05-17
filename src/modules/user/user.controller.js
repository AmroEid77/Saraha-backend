import userModel from "../../../db/model/User.model.js";
import cloudinary from "../../utilities/cloudinary.js";


export const getProfile = async (req, res) => {
    const user = await userModel.findById(req.user._id);

    return res.json({ message: "success get user", user });

}

export const uploadImage = async(req,res,next) => {
    //const imgUrl =req.file.destination + "/" + req.file.filename;
    const {secure_url} = await cloudinary.uploader.upload(req.file.path,{folder:`${process.env.APP_NAME}/users`});
    const user = await userModel.findByIdAndUpdate(req.user._id, {profilePic:secure_url},{new:true});
    return res.json({message: "success upload image", user})
}


