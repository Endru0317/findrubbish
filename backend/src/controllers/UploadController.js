const fs = require("fs");

class UploadController {
  static upload = (req, res) => {
    fs.writeFile("data.json", JSON.stringify(req.body), (err) => {
      if (err) throw err;
      console.log("Data written to file");
    });
  };
}

module.exports = UploadController;
