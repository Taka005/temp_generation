const config = require("./config.json");
const fs = require("fs");
let temp = ["35.7", "35.8", "35.9","36.0", "36.1","36.2","36.3","36.4", "36.5", "36.6", "36.7", "36.8", "36.9", "37.0"]; 
for(i=0;i<config.temp;i++){
  let random = Math.floor(Math.random() * temp.length);
  console.log(temp[random]);
  try{
    fs.appendFileSync(`./temp.txt`, `${temp[random]}\n`, 'utf8');
  }catch(error){
    console.log(error)
  }
}