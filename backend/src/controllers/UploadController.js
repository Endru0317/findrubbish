const fs = require("fs");

class UploadController {
  static upload = (req, res) => {
    fs.readFile("rubbishData.json", (err, data) => {
      var json = JSON.parse(data);
      console.log(req.body.address);
      var temp = {
        place_id: Math.random(),
        lat: req.body.address[0],
        lon: req.body.address[1],
        img: req.body.image,
        display_name: req.body.display_name,
      };
      json.push(temp);
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
