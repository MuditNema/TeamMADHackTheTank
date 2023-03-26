const express = require('express')
const PORT = 3000
const app = express()
const connectToMongo = require('./db')
const cors=require("cors");

// connecting to our database via mongoose
connectToMongo();
app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization, access-control-allow-headers, x-api-key');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT , DELETE');

  if('OPTIONS'===req.method) {
      res.sendStatus(200);
  } else {
      // winston.info(`${req.ip} ${req.method} ${req.url}`);
      console.log(`${req.ip} ${req.method} ${req.url}`);
      next();
  }
});
app.use('/user',require('./routes/user'))
app.use('/scholar',require('./routes/scholarship'))
app.use('/heatmap',require('./routes/heatmap'))

app.get("/", async (req, res) => {
    res.json("Reached to the root");
  });

app.listen(PORT,() => {
    console.log("This server is running on port " + PORT);
})