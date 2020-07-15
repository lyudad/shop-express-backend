import getConnection from './index'

const connection = getConnection()

export default {
    getAllUsers: () => {
        const query = 'SELECT * FROM users'
        return new Promise ( (resolve, reject) => 
            connection.query(query, [], (err, res) => {
            if(err) {
                console.log('err', err)
                reject(err)
                }
                console.log('res', res)
                resolve(res)
            })
        )
    },
    updateUsername: (username, id) => {
        const query = 'UPDATE users SET name=? WHERE id=?'
        return new Promise ( (resolve, reject) => 
            connection.query(query, [username, id], (err, res) => {
                if(err) {reject(err)}
                resolve(res)
            })
        )
    }
}