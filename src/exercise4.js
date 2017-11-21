exports.run = function(input) {
  console.log("Exercise #4");

  // YOUR CODE IS WELCOME HERE
  function repeat (repetitions,string)
  {
      var chaineFinale=string;

      for(var j=1;j<repetitions;j++)
        chaineFinale+=`, ${string}`;

      return chaineFinale;
  }
  /** STRICTLY FORBIDDEN TO CHANGE THIS CODE */
  return input(3, "Beetlejuice", repeat);
  /** */
};
