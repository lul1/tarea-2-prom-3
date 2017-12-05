

const express = require("express");
const app     = express();
const path    = require("path");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/find", (request, response) => {
      console.log(request.body.first_name),
      console.log(request.body.last_name);
      console.log(request.body.answer);
      console.log(request.body.types);
      console.log(request.body.hobbies);
      console.log(request.body.comentario);


      response.json({"method": "post", "success": true});
});

/*app.get("/find", (request, response) => {
      console.log(request.query.first_name),
      console.log(request.query.last_name);
      console.log(request.query.answer);
      console.log(request.query.types);
      console.log(request.query.hobbies);
      console.log(request.query.comentario);


      response.json({"method": "get", "success": true});
});*/

app.use("/", express.static("public"));

app.listen(8080, function () {
  console.log('Listening on port 8080!')
});
