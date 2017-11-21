exports.run = function(input) {
  console.log("Exercise #2");

  string=input.split('');
  var bigger=0;
  string.forEach(element => {
    element=parseInt(element);
    if(element>bigger)
      bigger=element;
  });

  return bigger;
};


