export const asyncHandler = (functionToHandle)=>{


    return (req,res,next)=>{
        functionToHandle(req,res,next).catch(err=>{
            return res.json({message:"catch error",error:err.stack});
        })
    }
}