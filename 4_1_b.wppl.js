var kartya = function () {
  var szin1 = randomInteger(4) + 1; // 1: kőr, 2: pikk, 3: treff, 4: káró
  var figura1 = randomInteger(4) + 1; // 1: király, 2: ász, 3: dáma, 4: bubi
  var szin2 = randomInteger(4) + 1; 
  var figura2 = randomInteger(4) + 1; 
  var huzas1 = [szin1, figura1];
  var huzas2 = [szin2, figura2];

  // Az eredeti feltetel: Nem ugyanazt huztuk es az egyik lap nem kőr vagy a másik lap nem király
  // Nem volt teljesen egyertelmu, hogy ez a feltetel maradjon-e a feladatban.
  // Ha nem akarjuk figyelembe venni akkor ki kell kommentezni.
  condition(!(szin1 == szin2 && figura1 == figura2) && 
            (!(szin1 == 1) || !(figura2 == 1)) &&
            (!(szin2 == 1) || !(figura1 == 1)));
  
  // Uj feltetel, hogy az Y (masodik huzas) az pikk dama
  condition(szin2 == 2 && figura2 == 3);

  // Igazat adunk vissza ha ezek mellett a feltelek mellett az elso huzas 
  // treff kiraly vagy treff asz. Hamisat adunk vissza ha nem.
  return (szin1 == 3 && (figura1 ==1 || figura2 ==2));
};

var conditionalProbability = Infer({ method: 'enumerate', model: kartya });
print(conditionalProbability);
viz.auto(conditionalProbability);
