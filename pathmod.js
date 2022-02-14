const path=require('path');
// it give dir name
console.log(path.dirname('C:/Users/HP/Desktop/Node/basichttpserver/path_module/pathmod.js'));
// it return extension name 
console.log(path.extname('C:/Users/HP/Desktop/Node/basichttpserver/path_module/pathmod.js'));
// it return file name
console.log(path.basename('C:/Users/HP/Desktop/Node/basichttpserver/path_module/pathmod.js'));
// returns an object whose properties represent significant elements of the path 
const myPath= path.parse('C:/Users/HP/Desktop/Node/basichttpserver/path_module/pathmod.js');
console.log(myPath.name);
console.log(myPath.base);
console.log(myPath.dir);