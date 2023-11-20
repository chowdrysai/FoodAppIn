const express = require("express");
const app = express();
const PORT = process.env.PORT || 4050;
const { DB_URL } = require('./config/config.json')

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

//IMPORT ROUTES
const authRoute = require("./routes/auth");
const itemRoute = require("./routes/item");
const orderRoute = require("./routes/order");

//ACCESSING THE ENVIRONMENT VARIABLES
dotenv.config();

//CONNECTION TO DATABASE
mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log("connected to db ")
    app.listen(PORT, () => console.log(`server up and running at  ${PORT}`));
  }
);

//MIDDLEWARE -> DISALBING CORS AND USED FOR JSON OUTPUT
app.use(express.json());
app.use(cors({
  origin: "http:///deploy-mern-1whq.vercel.app",
  methods: ['POST', 'GET', 'DELETE', 'PUT', 'PATCH'],
  credentials: true
}))
app.get('/', (req, res) => {
  res.json("hello")
})
//ROUTE MIDDLEWARE
app.use("/auth", authRoute);
app.use("/items", itemRoute);
app.use("/orders", orderRoute);
