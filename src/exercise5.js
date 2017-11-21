var fs=require('fs');

exports.run = function(input) {
  console.log("Exercise #5");
  var total=0;

  fs.readdir(input.directory, function (err, files) {
    if(err)
      return input.showError;
    files.forEach(element=>{
      total++;
    });
    
    return input.showDone(total);
  
  });

};
