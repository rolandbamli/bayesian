var feature1 = ['könyvtáros','tanár'];
var feature2 = ['csendes','cserfes'];
var operator = [' és ',' vagy '];

var SimpleModel = function() {
    var word1 = uniformDraw(feature1)
    var op = uniformDraw(operator)
  
    var word2  = uniformDraw(feature2)
    print('Premissza: Anna ' + word1 + op + word2 + '.'); 
    var word3 = uniformDraw(feature2)
    print('Konklúzió: Anna ' + word3 + '.'); 
    var ervenyes = (op == ' és ')
                   ? ((word2 == word3) ? 'érvényes' : 'nem érvényes') 
                   : 'nem érvényes'
    print(ervenyes); 
    return ervenyes
}

var dyslexiaProbability = 0.3;

var ComplexModel1 = function() {
    var word1 = uniformDraw(feature1)
    var op = uniformDraw(operator)
    var word2  = uniformDraw(feature2)
    
    print('Premissza: Panni ' + word1 + op + word2 + '.');
  
    var word3 = uniformDraw(feature2)
    print('Konklúzió: Panni ' + word3 + '.'); 
    var randomNumber = flip(dyslexiaProbability);
    print(randomNumber);
  
    var ervenyes = (op == ' és ')
                   ? ((word2 == word3 && randomNumber) ? 'érvényes' : 'nem érvényes') 
                   : 'nem érvényes'
    print(ervenyes); 
    return ervenyes
}

var output = 
  Infer({model: ComplexModel1, method:'rejection', samples: 1})