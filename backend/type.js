const zod = require("zod");

const createCardSchema = zod.object({
    name: zod.string().min(1, { message: "Name is required." }),
    desc: zod.string().min(1, { message: "Description is required." }),
    interest: zod.array(zod.string().min(1)).nonempty({ message: "At least one interest is required." }),
    linkedin: zod
    .union([zod.string().min(4), zod.string().length(0)])
    .optional()
    .transform(e => e === "" ? undefined : e),
    
    twitter: zod
    .union([zod.string().min(4), zod.string().length(0)])
    .optional()
    .transform(e => e === "" ? undefined : e),
    
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