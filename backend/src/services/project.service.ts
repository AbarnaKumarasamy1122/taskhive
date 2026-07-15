import prisma from "../config/prisma";



export const createProject =
async(data:any)=>{


return await prisma.project.create({

data

});


};



export const getProjects =
async()=>{


return await prisma.project.findMany({

include:{
manager:true,
members:true,
tasks:true
}

});


};



export const getProject =
async(id:string)=>{


return await prisma.project.findUnique({

where:{
id
},

include:{
tasks:true
}

});


};



export const updateProject =
async(
id:string,
data:any
)=>{


return prisma.project.update({

where:{
id
},

data

});


};



export const deleteProject =
async(id:string)=>{


return prisma.project.delete({

where:{
id
}

});


};