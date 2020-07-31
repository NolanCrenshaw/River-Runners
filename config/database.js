const {
    username,
    password,
    database,
    host
} = requre('./index').db;

module.exports = {
    development: {
        username,
        password,
        database,
        host,
        dialect: "postgres",
    },
    production: {
        use_env_variable: "DATABASE_URL"
    }
};