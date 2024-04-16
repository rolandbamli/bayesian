/*

3.4 Van egy beépített emberünk a Monty Hall/vos Savant szituációban, aki 50% százalékban helyesen mutogatja el nekünk a színfalak mögül, 
hogy melyik ajtó mögött van az autó. Szót fogadunk neki, és azt az ajtót választjuk, amit ő javasol. Még mindig érdemes-e azután váltani, 
hogy Monty megmutatot egy kecskét? A választ támasszuk alá webppl programmal!

*/

// A Vos Savant / Monty Hall probléma szimulálása
// Kicsit refactoráltam a kódot, így nekem kicsit könnyebb átlátni.

var vosSavantProblemSimulation = function() {
  // Autó helyének véletlenszerű kiválasztása (3 ajtó közül)
  var autoHely = randomInteger(3);

  // Játékos tippjének véletlenszerű kiválasztása
  var jatekosEredetiTipp = randomInteger(3);

  // Monty ajtó választása: nem választhatja az autó helyét vagy a játékos tippjét
  var montyAjanl = function(auto, tipp) {
    return _.without([0, 1, 2], auto, tipp)[0]; // 3 ajtó számozása: 0, 1, 2. Ezek vannak egy listában. Az autó helyét és a játékos tippjét kivesszük a listából. Igy az marad ami Monty ajtója lesz.
  };

  // Monty nyit egy ajtót
  var montyNyit = montyAjanl(autoHely, jatekosEredetiTipp);

  // Játékos vált az ajánlott ajtóra
  var ujTipp = function(tipp, monty) {
    return _.without([0, 1, 2], tipp, monty)[0]; // Itt is ugyanaz a logika mint a montyAjanl függvényben. Az új tipp az lesz ami nem az eredeti tipp és nem az ajtó amit Monty kinyitott.
  };

  // Játékos végső tippje
  var ValtasTipp = ujTipp(jatekosEredetiTipp, montyNyit);

  // Ellenőrizze, hogy a játékos nyert-e különnöző stratégiákkal
  var strategiaMaradas = (autoHely == jatekosEredetiTipp) ? 'nyer' : 'veszít';
  var strategiaValtas = (autoHely == ValtasTipp) ? 'nyer' : 'veszít';

  /*
  A besúgó stratégia. A besúgó egy olyan személy, aki 50% eséllyel mondja meg nekünk, hogy melyik ajtó mögött van az autó.
  Ha mindig hallgatunk rá, akkor a nyerési eseélyünk attól függ, hogy jó információt kapunk-e tőle. 
  Mivel, ha tudjuk hogy hol van az autó, biztosan el tudjuk dönteni, hogy maradni vagy váltani érdemesm, így biztosan nyerünk.
  Tehát szerintem, ha 50% eséllyel jó információt kapunk, akkor a nyerési esélyünk is 50%.
  */

  var besugoTippjenekMegbizhatosaga = 0.5;
  var strategiaBesugo = (flip(besugoTippjenekMegbizhatosaga)) ? 'nyer' : 'veszít';

  return  {
    strategiaMaradas: strategiaMaradas, 
    strategiaValtas: strategiaValtas,
    strategiaBesugo: strategiaBesugo
  } 

};

var eloszlás = Enumerate(vosSavantProblemSimulation);

viz.marginals(eloszlás)
