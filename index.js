import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter the URL you would like to generate a QR code for: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qrImg = qr.image(url);
    qrImg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });