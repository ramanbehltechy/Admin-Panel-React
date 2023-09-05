const express = require('express');
const cors=require("cors");
const bodyParser = require('body-parser');
const ConnectDB = require('./dbConnect');
const app = express();
require("dotenv").config({path: `${__dirname}/.env`})

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//allow cross origin from client localhost
app.use(cors());
// Routes
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);
ConnectDB()


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
