var fs=require('fs');

exports.run = function(input) {
  console.log("Exercise #5");
  var total=0;
  input.showInProgress();//Utilisation de la fonction de progression de input
  fs.readdir(input.directory, function (err, files) {//utilisation de la fonction asynchrone de lecture de répertoire
    if(err)
      return input.showError();//Si il y a une erreur on affiche execute la fonction d'erreur
    files.forEach(element=>{
      total++;
    });
    
    return input.showDone(total);//Si ca a fonctionné, on utilise la fonction de succes de input
  
  });

};
