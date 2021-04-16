import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";
import https from "https";
import path from "path";
import fs from "fs";
import multer from "multer";
import cors from "cors";

const __dirname = path.resolve(path.dirname('')); 

//app config

const app = express();
const port = 9000;


const key = fs.readFileSync(path.join(__dirname,"./selfsigned.key"));
const cert = fs.readFileSync(path.join(__dirname,"./selfsigned.crt"));
const options = {
    key: key,
    cert: cert
};

const httpServer = https.createServer(options, app);

app.use(express.static('videos'));
app.use(cors());

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

app.get('/select', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/video', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/user-media.html'));
});

const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

const upload = multer({
  dest: "./videos"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

app.post(
  "/upload",
  upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
    const tempPath = req.file.path;
    console.log(tempPath);

    const targetPath = path.join(__dirname, "./videos/", 
          path.basename(tempPath) + req.file.originalname);
    console.log(targetPath);


    fs.rename(tempPath, targetPath, err => {
      if (err) return handleError(err, res);
      res
        .status(200)
        .contentType("text/plain")
        .end("File uploaded!");
    });


    /*if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        res
          .status(200)
          .contentType("text/plain")
          .end("File uploaded!");
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }*/

  }
);

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

