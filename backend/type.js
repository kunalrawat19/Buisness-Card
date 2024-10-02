const zod = require("zod");

const createCardSchema = zod.object({
    name: zod.string().min(1, { message: "Name is required." }),
    desc: zod.string().min(1, { message: "Description is required." }),
    interests: zod.array(zod.string().min(1)).nonempty({ message: "At least one interest is required." }),
    linkedin: zod.string().url({ message: "Invalid LinkedIn URL." }).optional(),
    twitter: zod.string().url({ message: "Invalid Twitter URL." }).optional(),
  });
// const updateTodo = zod.object({
//     id:zod.string()
// })
// body{
//     title:string,
//     description:string,
// }

// {
//     id:string,
// }

module.exports = {
    createCardSchema,
    
}