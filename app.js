console.log('A számológép használatra kész.');

// 1) Kérdezz rá a „totalDistanceToTravel” értékére, és mentsd el a választ egy változóba.
var totalDistanceToTravel = prompt('Hány kilométer távolságot kíván megtenni? Adjon meg egy számot!');

// 2) Kérdezz rá az „averageLitersOverHundred” értékére, és mentsd el a választ egy változóba.
var averageLitersOverHundred = prompt('Mi az űrhajó átlagos fogyasztása literben? Adjon meg egy számot!');

// 3) Kérdezz rá a „tankCapacity” értékére, és mentsd el a választ egy változóba.
var tankCapacity = prompt('Mi az űrhajó üzemanyagtartályának űrtartalma literben? Adjon meg egy számot!');


// 4) Végezd el a számítást (hívd meg a „calculateFuelToOffload” függvényt).



function calculateFuelToOffload() {
    // 1. lépés: Számolja ki a szükséges üzemanyag-mennyiséget.
   var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
   console.log('Szükséges üzemanyag-mennyiség: ' + requiredFuel + ' L');
   alert('Szükséges üzemanyag-mennyiség: ' + requiredFuel + ' L');

    // 2. lépés: Számolja ki a lecsapolandó üzemanyagot.
    var fuelToOffload = tankCapacity - requiredFuel;
    console.log('Leeresztendő üzemanyag: ' + fuelToOffload + ' L');
    alert('Leeresztendő üzemanyag: ' + fuelToOffload + ' L');
}

// 5) Írd ki az eredményt a felhasználónak.

calculateFuelToOffload();