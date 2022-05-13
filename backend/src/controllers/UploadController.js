const fs = require("fs");

class UploadController {
  static upload = (req, res) => {
    fs.readFile("data.json", (err, data) => {
      var json = JSON.parse(data);
      json.push(json);
      fs.writeFile("data.json", JSON.stringify(json), function (err) {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).send({ status: "uploaded" });
      });
    });
    /* 
    fs.appendFile("data.json", JSON.stringify(req.body), (err) => {
      if (err) {
        res.status(500).send(err);
      }
      console.log("Data written to file");
      res.status(200).send({ status: "uploaded" });
    }); */
  };

  static data = (req, res) => {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      res.status(200).send(data);
    });
  };
}

module.exports = UploadController;
