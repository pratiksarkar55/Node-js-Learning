// const Person = require('./person'); // This mode of import is known as CommonJs.
// const p1 = new Person('pratik',29);
// p1.getDetails();


const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // if(req.url === '/'){
    //   res.writeHead(200,{'Content-Type':'text/html'})
    //   res.end('<h1>THIS IS HOME PAGE</h1>')
    // }

    //build path
    let filePath = path.join(__dirname,'public',req.url==='/'?'index.html':req.url);
    let extName = path.extname(filePath);
    //set content-type

    let contentType = 'text/html'

    switch(extName){
      case '.js':
        contentType = 'text/javascript';
        break;
        case '.css':
          contentType = 'text/css';
          break;
          case '.json':
            contentType = 'application/json';
            break;
            case '.png':
              contentType = 'img/png';
              break;
              case 'jpg':
                contentType = 'img/jpg';
                break;
    }

    //read file
    fs.readFile(filePath,(err,content)=>{
      if(err){
        if(err.code === 'ENOENT'){
           // Page not found
           fs.readFile(path.join(__dirname,'public','404.html'),(err,contentObj)=>{
             res.writeHead(404,{'Content-Type':contentType})
             res.end(contentObj);
           })
        }else{
          res.writeHead(500)
          res.end('Server error');
        }
      }else{
          res.writeHead(200,{'Content-Type':contentType})
          res.end(content,'utf-8');
      }
    })
 });

 const PORT = process.env.PORT||5000;

 server.listen(PORT,()=>{console.log('server running on ',PORT)});


