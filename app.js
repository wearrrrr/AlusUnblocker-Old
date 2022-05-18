const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http')


const indexRouter = require('./routes/index')
const settingsRouter = require('./routes/settings')
const usersRouter = require('./routes/users')
const bookmarkletsRouter = require('./routes/bookmarklets')
const creditsRouter = require('./routes/credits.js')


// GAME ROUTES
const gamesRouter = require('./routes/games')
const osuGameRouter = require('./routes/gameRoutes/osu')

const app = express();

const server = http.createServer();

server.on('request', (request, response) => {
  if (bare.route_request(request, response)) return true;
  serve.serve(request, response);
});

server.on('upgrade', (req, socket, head) => {
if(bare.route_upgrade(req, socket, head))return;
socket.end();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('views'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
app.use('/settings', settingsRouter)
app.use('/proxies', proxiesRouter)
app.use('/bookmarklets', bookmarkletsRouter)
app.use('/credits', creditsRouter)

//GAMES ROUTERS
app.use('/osu', osuGameRouter)
app.use('/games', gamesRouter)

module.exports = app;
