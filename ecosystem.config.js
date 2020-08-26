module.exports = {
    apps: [
        {
            name: 'stage',
            script: './index.js',
            env: {
                PORT: 8081
            }
        }, {
            name: 'prod',
            script: './index.js',
            env: {
                PORT: 8082
            }
        }
    ],
    deploy: {
        staging: {
            key: '/Users/macmini/Documents/Testserver/demo.pem',
            user: 'ubuntu',
            host: 'ec2-18-197-172-96.eu-central-1.compute.amazonaws.com',
            ref: 'origin/autodeploy',
            repo: 'git@github.com:lyudad/shop-express-backend.git',
            path: '/var/www/shopServer',
            'post-deploy': 'npm i && pm2 reload ecosystem.config.js'
        }
    }
}