import Router from 'express'
import UserManager from '../DB/user.manager'

const userRouter = Router()

userRouter.post('/test', (req, res) => {

    // console.log('usename>>>>', req)
    // const { usename } = req.body
    // console.log('usename>>>>', usename)
    res.send('hello word test')
})

userRouter.get('/', async(req, res) => {
    const users = await UserManager.getAllUsers()
    res.send(users)
})

userRouter.post('/update-username', async(req, res) => {
    const {username, id} = req.body
    const users = await UserManager.updateUsername(username, id)
    console.log('users>>>', users)
    res.send(users)
})

export default userRouter