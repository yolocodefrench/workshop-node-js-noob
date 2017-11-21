exports.run = function(input) {
  console.log("Exercise #2");

  string=input.split('');
  var bigger=0;
  string.forEach(element => {//pour chaque element  
    element=parseInt(element);//On le transforme en entier
    if(element>bigger)//Si cet element est plus grand que le plus grand nombre déjà enregistré
      bigger=element;//alors il le remplace
  });

  return bigger;
};


