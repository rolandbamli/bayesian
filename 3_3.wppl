/*

3.3 Értsd meg a Monty Hall/vos Savant paradoxon programját!

*/

/* 

A programban definialunk egy modellt, ami a Monty Hall problemat implementalja.
A két lehetséges stratégia a játékban a maradás és a váltás. A modell enumeralasával megkapjuk hogyan alakul a stratégiák eredménye.
Az esetek kétharmadában a váltás a nyerő stratégia. És ezt nem elmélettel hanem a modell futtatásával kapjuk meg.

*/

var vosSavantProblem = function () {
    var Autó = categorical({ps:[1/3,1/3,1/3], vs:[1, 2, 3]}) // Az autó helye
    var Tipp = categorical({ps:[1/3,1/3,1/3], vs:[1, 2, 3]}) // A játékos tippje
    var Monty = (Autó == Tipp) // Monty döntése. Ha a játékos tippje egyezik az autó helyével, akkor Monty véletlenszerűen választ egyet a két maradék közül.  
                ? ( (Autó == 1) 
                   ? categorical({ps:[1/2,1/2], vs:[2, 3]}) : 
                   ( (Autó == 2) ? categorical({ps:[1/2,1/2], vs:[1, 3]}) :
                    categorical({ps:[1/2,1/2], vs:[1, 2]}) ) )
                : ( (1 !== Autó && 1 !== Tipp ) ? 1 :    // Ha a játékos tippje nem egyezik az autó helyével, akkor Monty kinyitja a másik ajtót, amelyik mögött nincs autó.
                   ( (2 !== Autó && 2 !== Tipp ) ) ? 2 : 3 )
    
    /* 

    A maradás stratégiát választva a játékos akkor nyer, ha az eredeti, első tippje egyezik az autó helyével. 
    Tehát ha 3 ajtó közül elsőre jól tippelt és eltalálta az autó helyét, akkor nyer. Ennek egyébkent 1/3 az esélye.

    */             
    var stratégia_maradás = (Autó == Tipp) ? 'nyer' : 'veszít' 

   /* 

   Ha a játékos a váltás stratégiát választja, akkor megváltoztatja a tippjét. Az ÚjTipp változó lesz újonnan választott ajtó.
   Ennek az ajtónak a kiválasztása így leírva egy bonyolultabb folyamat, mert Monty döntése befolyasolja. 
   De egyszereűen megfogalmazva: azt az ajtó lesz az új tipp amelyik nem az eredeti tippünk és nem a Montz által kinyitott ajtó.

   */       
    var ÚjTipp = (Autó !== Tipp) 
                ? Autó
                : ( (Tipp == 1 && Monty == 2) ? 3 : 
                   ( (Tipp == 1 && Monty == 3) ? 2 : 
                   ( (Tipp == 2 && Monty == 1) ? 3 :
                   ( (Tipp == 2 && Monty == 3) ? 1 :
                   ( (Tipp == 3 && Monty == 1) ? 2 : 1 ) ) ) ) ) 
    
    // Vátás stratégiát választva a játékos akkor nyer, ha az eredeti tippje nem egyezett az ajtó helyével. Ennek az esélye 2/3.               
    var stratégia_váltás = (Autó == ÚjTipp) ? 'nyer' : 'veszít'
    
    // Visszatérünk a két stratégia eredményével.
    return  {
             stratégia_maradás: stratégia_maradás, 
             stratégia_váltás: stratégia_váltás } 
}

// Abrázoljuk a modell eredményét. Az ábrákon látszik, hogy 2/3 esély van a váltás stratégiával nyerni, míg a maradás stratégiával csak 1/3.
var eloszlás = Enumerate(vosSavantProblem)


/*

Én egyébként úgy értettem meg ezt a paradoxont (évekkel ezelőtt, de azóta újra és újra néhanyszor :) ), hogy csináltam egy táblázatot a 3 lehetséges esetről. 
Ez nem a feltételes valószínágesség megközelítést használja, de szerintem könnyen érthető.

Úgyanis 3 féle képpen tippelhetünk először. És ez a tipp meghatarozza a játék eredményét mindkét stratégia esetén.

+----------------+----------------+----------------+---------------------------+-----------------------------------+
| 1. ajtó        | 2. ajtó        | 3. ajtó        | Eredmény, ha maradunk az  | Eredmény, ha változtatunk a tippen|
|                |                |                | első ajtónál              |                                   |
+----------------+----------------+----------------+---------------------------+-----------------------------------+
| Kecske         | Kecske         | Autó           | Veszít                    | Nyer                              |
+----------------+----------------+----------------+---------------------------+-----------------------------------+
| Kecske         | Autó           | Kecske         | Veszít                    | Nyer                              |
+----------------+----------------+----------------+---------------------------+-----------------------------------+
| Autó           | Kecske         | Kecske         | Nyer                      | Veszít                            |
+----------------+----------------+----------------+---------------------------+-----------------------------------+

Lényegében vagy eltaláljuk elsőre a jó ajtót, vagy nem. Ennek 1/3 : 2/3 az esélye. 

Ha eltaláljuk, akkor biztos hogy nem érdemes váltani.
Ha nem találjuk el, akkor a másik ajtó mögött viszont csak a nyeremény lehet, mert tudjuk hogy Monty nem nyitja ki azt az ajtót, amelyik mögött a nyeremény van. 
De egyet mindenképp kinyit. Szóval csak a jó ajtó maradhat. Vagyis minden esetben érdemes váltani.

Szerintem az okozza a paradoxont, hogy az emberek nem veszik észre alapból, hogy a Monty döntése nem véletlenszerű. Információ tartalma van, így nekünk sem véletlenszerűen érdemes döntenünk az utolsó két ajtó között.

*/