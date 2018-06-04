var env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test'){
    // var config = require('./config.json');
    // var envConfig = config[env];

    // Object.keys(envConfig).forEach((key) => {
    //     process.env[key] = envConfig[key];
    // });

    process.env.JWT_SECRET = 'secret123!';
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'localhost:27017';
}
