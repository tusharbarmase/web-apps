require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const notesRoutes = require("./routes/notesRoutes");
const userRoutes = require("./routes/userRoutes");

mongoose.set("strictQuery", false);

//cors
const whitelist = ["https://tusharbarmase.github.io"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "DELETE", "PATCH"],
};

//create express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(cors(corsOptions));

//routes
app.get("/", (req, res) => {
  res.json({ mssg: "server up & running" });
});
app.use("/api/notes", notesRoutes);
app.use("/api/user", userRoutes);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
