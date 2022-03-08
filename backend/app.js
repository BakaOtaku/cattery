require("dotenv").config();
var FormData = require('form-data');
const fs = require("fs");
const axios = require("axios");

// pin all images to pinata and get the uri
const pinFileToIPFS = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  let data = new FormData();
  data.append('file', file)

  const res = await axios.post(url, data, {
    maxContentLength: 'Infinity',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key: process.env.pinata_api_key,
      pinata_secret_api_key: process.env.pinata_secret_api_key
    }
  });
  return res.data.IpfsHash;
}
// read file local stotage
const readFileLocal = async (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}


const main = async () => {
  for (let i = 1; i < 2; ++i) {
    try {
      const img = await readFileLocal(`./img/img${i}.png`);
      console.log(img);
      const cid = await pinFileToIPFS(img);
      console.log('IpfsHash:', cid);
    } catch (err) {
      console.log(err);
    }
  }
}
main();
