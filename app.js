var totalDistanceToTravel = prompt('Hány kilométer távolságot kíván megtenni? Adjon meg egy számot!');

var averageLitersOverHundred = prompt('Mi az űrhajó átlagos fogyasztása literben? Adjon meg egy számot!');

var tankCapacity = prompt('Mi az űrhajó üzemanyagtartályának űrtartalma literben? Adjon meg egy számot!');



function calculateFuelToOffload() {
   
   var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
   console.log('Szükséges üzemanyag-mennyiség: ' + requiredFuel + ' L');
   alert('Szükséges üzemanyag-mennyiség: ' + requiredFuel + ' L');

   
    var fuelToOffload = tankCapacity - requiredFuel;
    console.log('Leeresztendő üzemanyag: ' + fuelToOffload + ' L');
    alert('Leeresztendő üzemanyag: ' + fuelToOffload + ' L');
}



calculateFuelToOffload();