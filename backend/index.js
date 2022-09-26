const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Import Routers
const userRouter = require("./routes/user");
const roleRouter = require("./routes/role");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const loginRoute = require("./routes/login");

// Routes Middleware
app.use("/user", userRouter);
app.use('/roles', roleRouter)
app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/login', loginRoute);

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
