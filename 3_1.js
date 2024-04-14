/*
3.1 Írj programot, amelyik kiszámolja, hogy mi annak a valószínűsége,
hogy 52 lapos francia kártyából 2 kártyát választva az egyik király, a másik nem király!


    4/52 * 
    var NK = K ? flip(48/51) : flip(4/51);

*/

var model = function() {
    var K = flip(4/52);
    var NK = K ? flip(48/51) : flip(4/51);
    return {NK}
  }
  var eloszlás = Enumerate(model);
  
  var binom = Binomial({p: 0.25, n: 3});
  
  viz.auto(binom);
  viz.auto(eloszlás);