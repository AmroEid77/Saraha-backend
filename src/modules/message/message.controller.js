import messageModel from "../../../db/model/Message.model.js";
import userModel from "../../../db/model/User.model.js";

export const getMessages = async (req, res) => {
    
    const messages = await messageModel.find({receiverId:req.user._id});
    
    if (messages.length > 0) {
        return res.status(200).json({ message: "success", messages });
    }
    return res.status(404).json({ message: "No messages found" });
}

export const sendMessage = async (req, res) => {

    const { receiverId } = req.params;
    const { message } = req.body;
    const user = await userModel.findById(receiverId);
    if (!user) {
        return res.status(404).json({message: "User Not Found"});

    }
    const createMessage = await messageModel.create({content:message , receiverId })
    return res.status(201).json({message: "success",createMessage});

}