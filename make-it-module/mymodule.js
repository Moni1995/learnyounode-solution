var fs = require('fs');
var pt = require('path');

module.exports = function filter(path, ex, callback){

	var result = [];
  
	fs.readdir(path, (err, file) => {
		if (err) return callback(err);
		file.forEach(item => {
			if(pt.extname(item)==("."+ex)){
				result.push(item);
			}
		});

		callback(null,result);

	});
}
