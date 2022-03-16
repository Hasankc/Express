// setup your express app here
import express from "express";
import userRouter from "./routers/userRoot"
import bookRouter from "./routers/bookRoot"
import authorRouter from "./routers/authorRoot"
import logger from "./middlewares/logger";
import errorHandler from "./middlewares/errorHandler";

const app = express()
app.use(logger)
app.use(express.json())
app.use(express.urlencoded({extended: true }))

app.use("/userRoot", userRouter)
app.use("/bookRoot", bookRouter)
app.use("/authorRoot", authorRouter)
app.use(errorHandler)

app.listen(3000, () =>{
    console.log("App is runing on port 3000")
})