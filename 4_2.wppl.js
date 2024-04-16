var data = [28, 31, 44, 29];

var model = function() {
  // Előzetes eloszlás a hörcsög átlagos súlyára
  var meanWeight = gaussian(32,10);
  
  // Feltételezett szórás a megfigyelési hibákhoz
  var observationStdDev = 10;
  
  // Frissítése a megfigyelt adatok alapján
  map(function(weight) {
    observe(Gaussian({mu: meanWeight, sigma: observationStdDev}), weight);
  }, data);
  
  // Visszatérés az átlagos súly utólagos eloszlásával
  return meanWeight;
};

// Utólagos eloszlás becslése MCMC segítségével
var posterior = Infer({method: 'MCMC', samples: 5000}, model);

// Az utólagos eloszlás vizualizálása
viz(posterior);
