module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'sistema',
    define:{
        //Definiçoes para a tabela, ex utilizar "_"
        timestamps: true,
        undercored: true,
        undercoredAll: true,
    }
}