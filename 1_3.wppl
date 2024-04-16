/*
1.3 Programozz be egy olyan modellt, ami kiszámolja, hogy mi annak a valószínűsége, 
hogy ha két kockával dobunk, akkor az összeg legalább 4 lesz!
*/

var dobás = function () {
    var kocka1 = categorical({ps: [1/6, 1/6, 1/6, 1/6, 1/6, 1/6], 
                              vs: [1, 2, 3, 4, 5, 6]});
    var kocka2 = categorical({ps: [1/6, 1/6, 1/6, 1/6, 1/6, 1/6], 
                              vs: [1, 2, 3, 4, 5, 6]});
    return  { moreThan4: kocka1 + kocka2 >= 4 };
  }

  // A [kocka1,kocka2] változó "elméleti" (egzakt) eloszlása az esetek felsorolásával.
  
  var output = Enumerate(dobás);
  
  // A kimenet eloszlásának generálása felsorolással
  // var output = Infer({method: 'enumerate', model: dobás});
  
  // Közelítő eloszlás samples db-szori lefuttatással és abból histogram építésével 
  // var output = Infer({method: 'forward', samples: 10000, model: dobás});
 
  viz.hist(output);
  viz.table(output);