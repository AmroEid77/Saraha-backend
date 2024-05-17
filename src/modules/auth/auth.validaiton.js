import joi from 'joi';

export const signUpSchema = {
    body: joi.object({

        userName: joi.string().alphanum().min(3).max(20).required().messages({ "string.empty": "User name is required" }), // todo optional  you can pass multiple types of strings with optional messages
        password: joi.string().min(8).max(20).required(),
        email: joi.string().email().required(),
        cPassword: joi.valid(joi.ref('password')).required(),
        age: joi.number().min(18).max(100).positive().integer(),
        gender: joi.string().alphanum().valid("Male", "Female").required(),
    }),
    query: joi.object({
        test:joi.boolean().required(),
    })
}


export const signInSchema = {
    body: joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(8).max(20).required(),
    }),
    

}