import prisma from "../config/prisma";
import {
    hashPassword,
    comparePassword
}
from "../utils/password";

import {
    generateToken
}
from "../utils/jwt";



export const registerUser = async(data:any)=>{


    const {
        name,
        email,
        password,
        role
    } = data;



    const existingUser =
        await prisma.user.findUnique({

            where:{
                email
            }

        });



    if(existingUser){

        throw new Error(
            "Email already exists"
        );

    }



    let selectedRole;



    if(role){

        selectedRole =
            await prisma.role.findUnique({

                where:{
                    name:role
                }

            });

    }
    else{

        selectedRole =
            await prisma.role.findUnique({

                where:{
                    name:"TEAM_MEMBER"
                }

            });

    }



    if(!selectedRole){

        throw new Error(
            "Role not found"
        );

    }




    const hashedPassword =
        await hashPassword(password);



    const user =
        await prisma.user.create({

            data:{


                name,

                email,

                password:hashedPassword,

                roleId:selectedRole.id


            },


            include:{
                role:true
            }

        });



    return {

        id:user.id,

        name:user.name,

        email:user.email,

        role:user.role.name

    };


};





export const loginUser = async(
    email:string,
    password:string
)=>{


    const user =
        await prisma.user.findUnique({

            where:{
                email
            },

            include:{
                role:true
            }

        });



    if(!user){

        throw new Error(
            "Invalid email or password"
        );

    }



    const passwordMatch =
        await comparePassword(
            password,
            user.password
        );



    if(!passwordMatch){

        throw new Error(
            "Invalid email or password"
        );

    }



    const token =
        generateToken({

            id:user.id,

            email:user.email,

            role:user.role.name

        });



    return {


        token,


        user:{

            id:user.id,

            name:user.name,

            email:user.email,

            role:user.role.name

        }


    };


};