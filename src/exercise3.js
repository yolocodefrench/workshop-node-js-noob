exports.run = function(input) {
  console.log("Exercise #3");

  var array=[];
  var total=0;

  input.forEach(element => {//si multiply est true, alors on ajoute la valeur au tableau
    if(element.multiply===true)
      array.push(element.value);
  });

  total = array[0];//le total doit etre initialisé, sinon, la multiplication rendra toujours 0

  for(var i=1;i<array.length;i++){
    total*=array[i];
  }

  return total;

};
