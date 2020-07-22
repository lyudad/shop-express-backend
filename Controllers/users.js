import Router from 'express'
import UserManager from '../DB/user.manager'
import orm from '../ORM/models'

const {
    User,
    Product,
    Favorite
} = orm

const userRouter = Router()

userRouter.post('/test', async (req, res) => {
    const users = await User.findAll()
    res.send(users)
})

userRouter.get('/', async(req, res) => {
    const users = await UserManager.getAllUsers()
    res.send(users)
})

userRouter.get('/:userId', async(req, res) => {
    const {userId} = req.params
    const users = await User.findAll({
        where: {
            id: userId
        },
        include: [{
            model: Favorite,
            attributes: ['id'],
            include: [{
                model: Product
            }]
        }]
    })

    // const users = await Favorite.findAll({
    //     where: {
    //         user_id: 1
    //     },
    //     include: [{
    //         model: Product
    //     }]
    // })
    res.send(users)
})

userRouter.post('/update-username', async(req, res) => {
    const {username, id} = req.body
    const users = await UserManager.updateUsername(username, id)
    console.log('users>>>', users)
    res.send(users)
})

export default userRouter