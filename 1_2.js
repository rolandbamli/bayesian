var feature1 = ['könyvtáros','tanár'];
var feature2 = ['csendes','cserfes'];
var operator = [' és ',' vagy '];

/* 

Írj következtetésre olyan ComplexModel2-t, ami ilyen premisszákat 
tartalmaz: Panni "könyvtáros/tanár" "és/vagy" "csendes/cserfes" és 
ebből logikailag helyesen következtetne olyan konklúzióra, hogy 
"Panni csendes/cserfes" ill. "Panni könyvtáros/tanár", DE! 

az "és"-t 95%-ban a klasszikus logikának megfelelően használja, 

de elég gyakran, 80%-os valószínűséggel a vagy-ot és-nek olvassa.

*/

var ComplexModel2 = function() {
    var word1 = uniformDraw(feature1)
    var op = uniformDraw(operator)
    var word2  = uniformDraw(feature2)
    
    print('Premissza: Panni ' + word1 + op + word2 + '.');
  
    var word3 = uniformDraw(feature2)
    print('Konklúzió: Panni ' + word3 + '.'); 

    var ervenyes = (op == ' és ' && flip(0.95) ||  op == ' vagy ' && flip(0.80))
                    ? ((word2 == word3) ? 'érvényes' : 'nem érvényes') 
                    : 'nem érvényes'

    print(ervenyes); 
    return ervenyes
}

var output = 
  Infer({model: ComplexModel1, method:'rejection', samples: 1})