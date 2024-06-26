var kartya = function () {
  var szin1 = randomInteger(4) + 1;
  var figura1 = randomInteger(4) + 1;
  var szin2 = randomInteger(4) + 1;
  var figura2 = randomInteger(4) + 1;
  var huzas1 = [szin1, figura1];
  var huzas2 = [szin2, figura2];
  condition(!(szin1 == szin2 && figura1 == figura2) && 
            (!(szin1 == 1) || !(figura2 == 1)) &&
            (!(szin2 == 1) || !(figura1 == 1)));
  return [huzas1,huzas2];
};

var elsoHuzasKartya = function () {
  return [kartya()[0]] // Ennyit változtattam csak, hogy ugyanúgy húzunk, de csak az első húzás eredményét adjuk vissza így ennek az eloszlását kapjuk meg
}

var marginalX = Infer({method: 'enumerate', model: elsoHuzasKartya});
viz.auto(marginalX);

