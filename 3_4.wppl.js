/*

3.4 Van egy beépített emberünk a Monty Hall/vos Savant szituációban, aki 50% százalékban helyesen mutogatja el nekünk a színfalak mögül, 
hogy melyik ajtó mögött van az autó. Szót fogadunk neki, és azt az ajtót választjuk, amit ő javasol. Még mindig érdemes-e azután váltani, 
hogy Monty megmutatot egy kecskét? A választ támasszuk alá webppl programmal!

*/

// A Vos Savant / Monty Hall probléma szimulálása
// Kicsit refactoráltam a kódot, így nekem kicsit könnyebb átlátni. Nyer es veszít helyett is true es false lett a visszatérési érték, hogy átlátahatóbb legyen ennyi esetnél.

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
  var strategiaMaradas = (autoHely == jatekosEredetiTipp);
  var strategiaValtas = (autoHely == ValtasTipp);

  /*
  A besúgó stratégia. A besúgó egy olyan személy, aki 50% eséllyel mondja meg nekünk, hogy melyik ajtó mögött van az autó.
  Ha mindig hallgatunk rá, akkor a nyerési eseélyünk attól függ, hogy jó információt kapunk-e tőle. 
  Mivel, ha tudjuk hogy hol van az autó, biztosan el tudjuk dönteni, hogy maradni vagy váltani érdemesm, így biztosan nyerünk.
  Tehát szerintem, ha 50% eséllyel jó információt kapunk, akkor a nyerési esélyünk is 50%.
  */

  var hazudosBesugoMegbizhatosag = 0.5;
  var strategiaBesugo = flip(hazudosBesugoMegbizhatosag);



  /*  
  Volt meg 2 extra ötletem, ahogy még bonyolítani lehetne ezt.

  Az első a bátorság stratégia. Itt a besúgó, mindig igazat mond, de a jatekos bátorságától függ, hogy el meri-e fogadni a tanácsát abban az esetben. ha váltania kellene.
  */
  var besugoTipp = autoHely; // A besúgó biztosan tudja az autó helyét.
  var batorsag = 0.7; // A jatekos batorsága. Annak a valószíűsége, hogy a játekos vált, ha a besúgó azt mondja, hogy váltson.

  // Ha maradnunk kellene akkor teljesen megbízunk a besúgóban, aki mindig igazat is mond, igy biztos nyerünk.
  // Ha váltanunk kellene akkor csak akkora eséllyel bízunk benne, mint amennyire bátrak vagyunk. A besubesúgógo mindig igazat mond, tehát ha hallgatunk rá, nyerünk.
  var batorsagStrategia = (besugoTipp == jatekosEredetiTipp) ? true : flip(batorsag);
  
  /*
  A másik extra ötletem a következö:

  Hazudós bátorság stratégia.
  Most is bátorságunktól függ, hogy hallgatunk-e a besúgóra, ha váltani kell, de most a besúgó bizonyos eséllyel hazudni fog.

  Van egy-egy új megbízhatósági, illetve bátorsági valószínüségünk, hogy ne kavarja össze az eredeti feladatot.
  A besúgó tippje: Ha a besúgó igazat mond, akkor az autó helyét mondja, ha hazudik akkor az ajtót, amelyik mögött nincs autó és még nincs kinyitva. Tehát vagy azt amit választottunk, vagy amire válthatunk.
  */
  var hazudosBesugoMegbizhatosag = 0.5;
  var hazudosBesugoBatorsag = 0.7;
  var hazudosBesugoTipp = flip(hazudosBesugoMegbizhatosag) ? autoHely : _.without([0, 1, 2], autoHely, montyNyit)[0]; 

  var hazudosBatorsagStrategia = (hazudosBesugoTipp == jatekosEredetiTipp)                                      // megnézzük, hogy váltanunk vagy maradnunk kellene-e
                                ? (jatekosEredetiTipp == autoHely)                                              // ha maradnunk kellene a besúgó szerint, akkor biztos hogy maradunk. Ha az eredeti tippunk helyes, akkor nyerunk, ha nem akkor vesztünk
                                : flip(hazudosBesugoBatorsag) ? (ValtasTipp == autoHely) : jatekosEredetiTipp == autoHely;   // ha váltanunk kellene, akkor attól függően. hogy éppen mennyire vagyunk bátrak, váltunk vagy maradunk. 
                                                                                                                // Ha váltunk és az új tippünk helyes, vagy nem váltunk, de a régi tippünk helyes, akkor nyerunk. Ellenkező esetben vesztunk.

  return  {
    strategiaMaradas: strategiaMaradas, 
    strategiaValtas: strategiaValtas,
    strategiaBesugo: strategiaBesugo, // Van egy besúgónk, aki 50% eséllyel mond igazat. Mindig hallgatunk rá. Tehát 50% eséllyel nyerünk.

    // Az extra stratégiák
    batorsagStrategia: batorsagStrategia, // Van egy bátor játékosunk, aki 70% eséllyel hallgat a besúgóra, ha váltania kell. Ha nem kell váltania, akkor mindig hallgat a besúgóra. A besugó mindig igazat mond.
    hazudosBatorsagStrategia: hazudosBatorsagStrategia // Van egy hazudós besúgónk, aki 50% eséllyel hazudik. A játékos 70% eséllyel hallgat rá, ha váltania kell. Ha nem kell váltania, akkor mindig hallgat a besúgóra. 
  } 

};

var eloszlás = Enumerate(vosSavantProblemSimulation);

viz.marginals(eloszlás)
