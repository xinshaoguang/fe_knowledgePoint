
var path = require("path");
var fs = require("fs");
 
var pathName = "../../knowledgePoint";
fs.readdir(pathName, function(err, files){
    var dirs = [];
    (function iterator(i){
      if(i == files.length) {
        console.log(dirs);
        return ;
      }
      fs.stat(path.join(pathName, files[i]), function(err, data){     
        if(data.isFile()){               
            dirs.push(files[i]);
        }
        iterator(i+1);
       });   
    })(0);
    
});

// readme
// 运行node index.js
// 控制台打印目录文件名