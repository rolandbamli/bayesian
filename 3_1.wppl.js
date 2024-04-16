/*
3.1 Írj programot, amelyik kiszámolja, hogy mi annak a valószínűsége,
hogy 52 lapos francia kártyából 2 kártyát választva az egyik király, a másik nem király!
*/

var model = function() {

  // Első húzás: király húzásának valószínűsége (4 király 52 lapból)
  var K = flip(4/52);

  // Második húzás: ha először királyt húztak, akkor egy nem király lap húzásának valószínűsége,
  // vagy ha először nem királyt húztak, akkor egy király húzásának valószínűsége.
  var NK = K ? flip(48/51) : flip(4/51);

  // Ez lenyegében annak a valószínűsége, hogy az első húzás király és a második nem király, vagy fordítva.
  // Tehát a két esemény együttvéve. Így ezt adjuk vissza.
  return {NK}
}
var eloszlás = Enumerate(model);

viz.auto(eloszlás);