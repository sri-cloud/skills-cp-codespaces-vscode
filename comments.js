// Create web server

// Import modules   
const express = require('express'); 

// Import express module    
const app = express();

// Import body-parser module
const bodyParser = require('body-parser');

// Import mongoose module
const mongoose = require('mongoose');


// Import routes
const postsRoute = require('./routes/posts');
const commentsRoute = require('./routes/comments');

// Import dotenv module
require('dotenv/config');

// Import cors module
const cors = require('cors');

// Import morgan module
const morgan = require('morgan');

// Import helmet module
const helmet = require('helmet');

// Import compression module
const compression = require('compression');

// Import express-rate-limit module
const rateLimit = require('express-rate-limit');

// Import express-mongo-sanitize module
const mongoSanitize = require('express-mongo-sanitize');

// Import xss-clean module
const xss = require('xss-clean');

// Import hpp module
const hpp = require('hpp');

// Import path module
const path = require('path');

// Import fs module
const fs = require('fs');

// Import https module
const https = require('https');

// Import http module
const http = require('http');

// Import socket.io module
const socketio = require('socket.io');

// Import socketio-jwt module
const socketioJwt = require('socketio-jwt');

// Import socketio-redis module
const redisAdapter = require('socket.io-redis');

// Import socketio-emitter module
const ioEmitter = require('socket.io-emitter');

// Import socketio-redis module
const redis = require('redis');

// Import socketio-emitter module
const ioRedis = require('socket.io-redis');

// Import socketio-emitter module
const ioRedisAdapter = require('socket.io-redis');


// Import socketio-emitter module
const ioRedisEmitter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisEmitterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisEmitterAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisEmitterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterClientEmitter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisEmitterAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientAdapterEmitter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisEmitterClientAdapterEmitter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterClientEmitterAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientAdapterEmitterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisEmitterClientAdapterEmitterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterClientEmitterAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientAdapterEmitterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisEmitterClientAdapterEmitterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterClientEmitterAdapterClientAdapter = require('socket.io-emitter');


// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClientAdapterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapterClientAdapterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClientAdapterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapterClientAdapterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClientAdapterClientAdapterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapterClientAdapterClientAdapterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClientAdapterClientAdapterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapterClientAdapterClientAdapterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClient = require('socket.io-emitter');


// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapter = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisClientEmitterAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClient = require('socket.io-emitter');

// Import socketio-emitter module
const ioRedisAdapterEmitterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapterClientAdapter = require('socket.io-emitter');

