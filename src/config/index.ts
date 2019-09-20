module.exports = {
    db: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'root',
            database: 'print_shop'
        },
        debug: true,
        pool: {
            min: 0,
            max: 10
        }
    }
}
