import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";


//app config

const app = express();
const port = 9000;


//middleware
app.use(express.json());
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Header", "*"),
    next();
});

// DB Config
const connection_url = "mongodb://tiktokadmin:4yui48jndd8323@127.0.0.1:27017/tiktok";
mongoose.connect(connection_url,  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
} );


//api endpoints
app.get("/", (req, res) => 
    res.status(200).send("Hello World!")
);

app.get( "/v1/posts", (req, res) => res.status(200).send(Data));


app.get("/v2/posts", (req, res) => {

    Videos.find( (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data);
        }
    });

});

app.post("/v2/posts", (req, res) => {

    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send("Data Added");
        }
    });

});

app.patch("/v2/posts/:id", async (req, res) => {
  
  try {
    const dbVideos = req.body;
    await Videos.findByIdAndUpdate(req.params.id, dbVideos);
    await Videos.save();
    res.status(201).send(dbVideos);
  } catch (err) {
    res.status(500).send(err);
  }

});


//listen 
app.listen(port, () => console.log(`listening on localhost: ${port}`));






