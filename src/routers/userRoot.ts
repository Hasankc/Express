import express  from "express";

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('good')
})
userRouter.post('/', (req, res) => {})
userRouter.delete('/', (req, res) => {})
userRouter.put('/', (req, res) => {})

export default userRouter