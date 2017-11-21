exports.run = function(input) {
  console.log("Exercise #4");

  // YOUR CODE IS WELCOME HERE
  function repeat (repetitions,string)
  {
      var chaineFinale=string;//On initialise chaineFinale avec la valeur de string

      for(var j=1;j<repetitions;j++)//comme la première valeur de string a déjà été assignée, on commence à la deuxième
        chaineFinale+=`, ${string}`;//on concatène

      return chaineFinale;
  }
  /** STRICTLY FORBIDDEN TO CHANGE THIS CODE */
  return input(3, "Beetlejuice", repeat);
  /** */
};
