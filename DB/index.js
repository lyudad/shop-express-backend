const mysql = require('mysql')

import config from '../Config/db'

let connection

export default () => {
    if(!connection){
        connection = mysql.createConnection(config)

        connection.connect(function(err) {
            console.log('mysql err', err)
        })
    }
    return connection
}