const env = process.env;

const config = {
  db: { 
    host: env.DB_HOST || '52.20.16.17',
    user: env.DB_USER || 'movistarmysql',
    password: env.DB_PASSWORD || 'MovSoft2018',
    database: env.DB_NAME || 'EXAMEN',
  },
};


module.exports = config;