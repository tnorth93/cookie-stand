'use strict';

// placeholder?? list for hours because i don't know how to do it otherwise... yet
var businessHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];

// lets do a constructor
function Store(location, minHourCust, maxHourCust, avgUnitSale) {
  this.loc = location;
  this.min = minHourCust;
  this.max = maxHourCust;
  this.avg = avgUnitSale;
  this.customersPerHour = [];
  this.cookiesSoldPerHour = [];
  allStores.push(this);
  // this.randomCust = function(){
  //   var min = Math.ceil(this.minHourCust);
  //   var max = Math.floor(this.maxhourCust);
  //   return Math.floor(Math.random() * (max - min +1)) + min;
  // };
  // this.unitsSold = function() {
  //   for (var i = 0; i < 15; i++) {
  //     this.storeHours.push(Math.floor(this.randomCust() * this.avgUnitSale));
  //   }
  // };
}

Store.prototype.randomCust = function() {
  for (var i = 0; i < 15; i++) {
    var min = Math.ceil(this.min);
    var max = Math.floor(this.max);
    this.customersPerHour.push(Math.floor(Math.random() * (max - min +1)) + min);
  }
};

Store.prototype.unitsSold = function() {
  for (var i = 0; i < this.customersPerHour.length; i++) {
    this.cookiesSoldPerHour.push(Math.floor(this.customersPerHour[i] * this.avg));
  }
};

function makeHeaderRow() {
  var tableHeader = document.getElementById('table');
  for (var i = -1; i < businessHours.length + 1; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = businessHours[i];
    tableHeader.appendChild(thEl);
  }
}

Store.prototype.makeTableRow = function() {
  for (var i = 0; i < allStores.length; i++) {
    var table = document.getElementById('table');
    var tableRow = document.createElement('tr');
    tableRow.textContent = allStores[i].loc;
    table.appendChild(tableRow);
    for (var n = 0; n < this.cookiesSoldPerHour.length + 1; n++) {
      var tableData = document.createElement('td');
      tableData.textContent = allStores[i].cookiesSoldPerHour[n];
      tableRow.appendChild(tableData);
    }
  }
};

// Store.prototype.makeTableData = function() {
//   var table = document.getElementById('table');
//   for (var i = 0; i < this.cookiesSoldPerHour.length; i ++) {
//     var tableData = document.createElement('td');
//     tableData.textContent = this.cookiesSoldPerHour[i];
//     table.appendChild(tableData);
//   }
// };

// function makeTableRow() {
//   var table = document.getElementById('table');
//   for (var i = 0; i < allStores.length; i++) {
//     var tableRow = document.createElement('tr');
//     tableRow.textContent = allStores[i].loc;
//     table.appendChild(tableRow);
//   }
// }




var pike = new Store('First and Pike', 23, 65, 6.3);
var airport = new Store('SeaTac Airport', 3, 24, 1.2);
var center = new Store('Seattle Center', 11, 38, 3.7);
var hill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
makeHeaderRow();
pike.randomCust();
pike.unitsSold();

// pike.makeTableData();
airport.randomCust();
airport.unitsSold();

center.randomCust();
center.unitsSold();

hill.randomCust();
hill.unitsSold();

alki.randomCust();
alki.unitsSold();


pike.makeTableRow();
console.log(allStores);









// // Stores the min/max hourly customers, and the average cookies per customer, in object properties
// var storePike = {
//   minHourCust: 23,
//   maxHourCust: 65,
//   avgUnitSale: 6.3,
//   storeHours: [],

//   // uses a method of object to generate a random number of customers per hour
//   randomCust: function(min, max) {
//     min = Math.ceil(storePike.minHourCust);
//     max = Math.floor(storePike.maxHourCust);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },

//   // calc and store simulated amounts of cookies sold or each hour at specific store using avg cookies purchased and random customers generated (for loop)
//   unitsSold: function() {
//     for ( var i = 0; i < 15; i++) {
//       storePike.storeHours.push(Math.floor(storePike.randomCust() * storePike.avgUnitSale));
//     }
//   },

//   // set UL LIs to results that have been stored in the storeHours array
//   populateLi: function() {
//     var ulElement = document.getElementById('pike');
//     for (var i = 0; i < storePike.storeHours.length; i++) {
//       // create list items in html doc
//       var liEl = document.createElement('li');
//       // use storeHours array to populate lis with selling data
//       liEl.textContent = businessHours[i] + ': ' + storePike.storeHours[i] + ' cookies';
//       // append the content to display in doc
//       ulElement.appendChild(liEl);
//     }
//   },
//   // populate the final li with the total from all hours
//   populateLiTotal: function() {
//     var accumulator = 0;
//     for(var i = 0; i < storePike.storeHours.length; i++) {
//       accumulator += storePike.storeHours[i];
//     }
//     // create another li for the total sales
//     var ulElement = document.getElementById('pike');
//     var liTotal = document.createElement('li');
//     // set li content to the sum of all numbers in the storeHours array
//     liTotal.textContent = 'Total: ' + accumulator + ' cookies';
//     // append li to end of hour list in html doc
//     ulElement.appendChild(liTotal);
//   },
// };

// var storeAirport = {
//   minHourCust: 3,
//   maxHourCust: 24,
//   avgUnitSale: 1.2,
//   hourlySales: [],
//   randomCust: function() {
//     var min = Math.ceil(storeAirport.minHourCust);
//     var max = Math.floor(storeAirport.maxHourCust);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   unitsSold: function() {
//     for (var i = 0; i < 15; i++) {
//       this.hourlySales.push(Math.floor(storeAirport.randomCust() * storeAirport.avgUnitSale));
//     }
//   },
//   populateLiHourly: function() {
//     var ulElement = document.getElementById('airport');
//     for (var i = 0; i < this.hourlySales.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = businessHours[i] + ': ' + this.hourlySales[i] + ' cookies';
//       ulElement.appendChild(liEl);
//     }
//   },
//   populateLiTotal: function() {
//     var accumulator = 0;
//     for (var i = 0; i < this.hourlySales.length; i++) {
//       accumulator += this.hourlySales[i];
//     }
//     var ulElement = document.getElementById('airport');
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + accumulator + ' cookies';
//     ulElement.appendChild(liEl);
//   },
// };

// var storeCenter = {
//   minHourCust: 11,
//   maxHourCust: 38,
//   avgUnitSale: 3.7,
//   hourlySales: [],
//   randomCust: function() {
//     var min = Math.ceil(this.minHourCust);
//     var max = Math.floor(this.maxHourCust);
//     return Math.floor(Math.random() * max - min + 1) + min;
//   },
//   unitsSold: function() {
//     for (var i = 0; i < 15; i++) {
//       this.hourlySales.push(Math.floor(this.randomCust() * this.avgUnitSale));
//     }
//   },
//   populateLi: function() {
//     var ulElement = document.getElementById('center');
//     for (var i =0; i < this.hourlySales.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = businessHours[i] + ': ' + this.hourlySales[i] + ' cookies';
//       ulElement.appendChild(liEl);
//     }
//   },
//   populateLiTotal: function() {
//     var accumulator = 0;
//     for (var i = 0; i < this.hourlySales.length; i++) {
//       accumulator += this.hourlySales[i];
//     }
//     var ulElement = document.getElementById('center');
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + accumulator + ' cookies';
//     ulElement.appendChild(liEl);
//   },
// };

// var storeHill = {
//   minHourCust: 20,
//   maxHourCust: 38,
//   avgUnitSale: 2.3,
//   storeHours: [],
//   randomCust: function() {
//     var min = Math.ceil(this.minHourCust);
//     var max = Math.floor(this.maxHourCust);
//     return Math.floor(Math.random() * max - min + 1) + min;
//   },
//   unitsSold: function() {
//     for (var i = 0; i < 15; i++) {
//       this.storeHours.push(Math.floor(this.randomCust() * this.avgUnitSale));
//     }
//   },
//   populateLi: function() {
//     var ulElement = document.getElementById('hill');
//     for (var i = 0; i < this.storeHours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = businessHours[i] + ': ' + this.storeHours[i] + ' cookies';
//       ulElement.appendChild(liEl);
//     }
//   },
//   populateLiTotal: function() {
//     var accumulator = 0;
//     var ulElement = document.getElementById('hill');
//     for (var i = 0; i < this.storeHours.length; i++) {
//       accumulator += this.storeHours[i];
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + accumulator + ' cookies';
//     ulElement.appendChild(liEl);
//   },
// };

// var storeAlki = {
//   minHourCust: 2,
//   maxHourCust: 16,
//   avgUnitSale: 4.6,
//   storeHours: [],
//   randomCust: function() {
//     var min = Math.ceil(this.minHourCust);
//     var max = Math.floor(this.maxHourCust);
//     return Math.floor(Math.random() * max - min +1) + min;
//   },
//   unitsSold: function() {
//     for (var i = 0; i < 15; i++) {
//       this.storeHours.push(Math.floor(this.randomCust() * this.avgUnitSale));
//     }
//   },
//   populateLi: function() {
//     var ulElement = document.getElementById('alki');
//     for (var i = 0; i < this.storeHours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = businessHours[i] + ': ' + this.storeHours[i] + ' cookies';
//       ulElement.appendChild(liEl);
//     }
//   },
//   populateLiTotal: function() {
//     var ulElement = document.getElementById('alki');
//     var accumulator = 0;
//     for (var i = 0; i < this.storeHours.length; i++) {
//       accumulator += this.storeHours[i];
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + accumulator + ' cookies';
//     ulElement.appendChild(liEl);
//   },
// };

// // calling functions for Pike store
// storePike.randomCust();
// storePike.unitsSold();
// storePike.populateLi();
// storePike.populateLiTotal();
// // calling functions for Airport store
// storeAirport.randomCust();
// storeAirport.unitsSold();
// storeAirport.populateLiHourly();
// storeAirport.populateLiTotal();
// // calling functions for Seattle Center Store
// storeCenter.randomCust();
// storeCenter.unitsSold();
// storeCenter.populateLi();
// storeCenter.populateLiTotal();
// // calling functions for Cap Hill store
// storeHill.randomCust();
// storeHill.unitsSold();
// storeHill.populateLi();
// storeHill.populateLiTotal();
// // calling functions for Alki store
// storeAlki.randomCust();
// storeAlki.unitsSold();
// storeAlki.populateLi();
// storeAlki.populateLiTotal();

