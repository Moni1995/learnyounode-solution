var filter = require('./mymodule.js');
var path = process.argv[2];
var ex = process.argv[3];


filter(path,ex,(err,list)=>{

	if (err) return callback(err);
	list.forEach(item =>{
		console.log(item);
	});
	
	
});
