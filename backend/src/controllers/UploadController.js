const fs = require("fs");

class UploadController {
  static upload = (req, res) => {
    fs.readFile("rubbishData.json", (err, data) => {
      var json = JSON.parse(data);
      json.push(req.body);
      fs.writeFile("rubbishData.json", JSON.stringify(json), function (err) {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).send({ status: "uploaded" });
      });
    });
  };

  static data = (req, res) => {
    fs.readFile("rubbishData.json", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      res.status(200).send(data);
    });
  };
}

module.exports = UploadController;
