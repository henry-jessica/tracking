const app = require('express')();
const serverless = require('serverless-http');
const io = require('socket.io')();
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const historyRouter = require("./routes/HistoryRoutes");
const historyService = require('./services/HistoryService');
app.use("/api/history", historyRouter);

const mongoose = require("mongoose");
let url ='mongodb+srv://admin:admin2022@mongomyplayground.jpdmnt8.mongodb.net/tracking?retryWrites=true&w=majority'; 
mongoose.connect(url, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

io.on('connection', (socket) => {
  socket.on('google-map-history', async msg => {
    console.log('msgmsg===>', typeof msg);
    msg = JSON.parse(msg);
    let data = await historyService.createHistory(msg);
    io.emit('google-map-history', data);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

module.exports.handler = serverless(app);
