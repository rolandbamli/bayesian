/*
3.2 Legyen az X Y és Z valószínűség változó olyan, ami az {0, 1, 2, 3} számok közül választ
egyenletes valószínűséggel. Legyen W = X + Y + Z, mi az X változó eloszlása, ha tudjuk, hogy W = 7? (Írj programot!)
*/

var model = function() {
    var X = uniformDraw([0, 1, 2, 3]);
    var Y = uniformDraw([0, 1, 2, 3]);
    var Z = uniformDraw([0, 1, 2, 3]);
    var W = X + Y + Z;
    condition(W == 7);
    return {X}
  }

var eloszlás = Enumerate(model);

viz.auto(eloszlás);