const fs = require('fs');
const path = require('path');

//create folder
fs.mkdir(path.join(__dirname,'test'),{},(err)=>{
  if(err) throw err;
  console.log('folder created');
})

//create and write to file
fs.writeFile(path.join(__dirname,'test','hello.txt'),'Hello World.',{},(err)=>{
  if(err) throw err;
  console.log('file written');
  fs.appendFile(path.join(__dirname,'test','hello.txt'),' I love NodeJs',{},(err)=>{
    if(err) throw err;
    console.log('file appended');
  })
})

//read file
fs.readFile(path.join(__dirname,'test','hello.txt'),'utf-8',(err,data)=>{
  if(err) throw err;
  console.log('file read ',data);
})

//rename file
fs.rename(path.join(__dirname,'test','hello.txt'),path.join(__dirname,'test','new_hello.txt'),(err)=>{
  if(err) throw err;
  console.log('file renamed');
})