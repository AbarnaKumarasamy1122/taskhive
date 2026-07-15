import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import projectRoutes from "./routes/project.routes";
import taskRoutes from "./routes/task.routes";
import {
    errorHandler
}
from "./middlewares/error.middleware";



const app = express();



app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(cookieParser());

app.use(morgan("dev"));



app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/users",
    userRoutes
);


app.use(
    "/api/projects",
    projectRoutes
);


app.use(
    "/api/tasks",
    taskRoutes
);

app.get("/",(req,res)=>{


    res.json({

        message:
        "TaskHive API Running"

    });


});



// Global Error Handler

app.use(errorHandler);



export default app;