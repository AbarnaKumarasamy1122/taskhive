import {Router} from "express";

import {
    authenticate
}
from "../middlewares/auth.middleware";


import {
    authorize
}
from "../middlewares/role.middleware";


const router = Router();



router.post(

"/",

authenticate,

authorize([
    "PROJECT_MANAGER"
]),

(req,res)=>{


    res.json({

        message:
        "Project created"

    });


}

);



router.get(

"/",

authenticate,

authorize([
    "ADMIN",
    "PROJECT_MANAGER"
]),

(req,res)=>{


    res.json({

        message:
        "Projects retrieved"

    });


}

);



export default router;