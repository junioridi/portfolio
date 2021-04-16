


import https from "https";
import path from "path";
import fs from "fs";
import multer from "multer";
import express from "express";

const __dirname = path.resolve(path.dirname('')); 

const app = express(); 

// openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt
const key = fs.readFileSync(path.join(__dirname,"./selfsigned.key"));
const cert = fs.readFileSync(path.join(__dirname,"./selfsigned.crt"));
const options = {
    key: key,
    cert: cert
};

const httpServer = https.createServer(options, app);

const PORT = process.env.PORT || 4000;


// put the HTML file containing your form in a directory named "public" (relative to where this script is located)
//app.get("/", express.static(path.join(__dirname, "./public")));
app.get('/', function(req, res) {
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

    const targetPath = path.join(__dirname, "./upload/", 
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


httpServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
