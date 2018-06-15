'use strict';

// GLOBAL VARIABLES
var businessHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var table = document.getElementById('table');
var storeForm = document.getElementById('store-form');

// CONSTRUCTOR---------------------------------------------------
function Store(location, minHourCust, maxHourCust, avgUnitSale) {
  this.loc = location;
  this.min = minHourCust;
  this.max = maxHourCust;
  this.avg = avgUnitSale;
  this.customersPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalCookiesSold = 0;
  this.randomCust();
  this.unitsSold();
  allStores.push(this);
  this.makeTableRow();
}

// GENERATE RANDOM NUMBER OF CUSTOMERS EACH HOUR LOGIC-----------------
Store.prototype.randomCust = function() {
  for (var i = 0; i < 15; i++) {
    var min = Math.ceil(this.min);
    var max = Math.floor(this.max);
    this.customersPerHour.push(Math.floor(Math.random() * (max - min +1)) + min);
  }
};

// GENERATE SALES FOR EACH HOUR LOGIC----------------------------------
Store.prototype.unitsSold = function() {
  for (var i = 0; i < this.customersPerHour.length; i++) {
    this.cookiesSoldPerHour.push(Math.floor(this.customersPerHour[i] * this.avg));
    this.totalCookiesSold += this.cookiesSoldPerHour[i];
  }
};

// GENERATE TABLE HEADER LOGIC-----------------------------------------
function makeTableHeader() {
  for (var i = -1; i < businessHours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = businessHours[i];
    table.appendChild(thEl);
  }
  var thElTotal = document.createElement('th');
  thElTotal.textContent = 'Total';
  table.appendChild(thElTotal);
}

// GENERATE TABLE DATA LOGIC-------------------------------------------
Store.prototype.makeTableRow = function() {
  var tableRow = document.createElement('tr');
  tableRow.textContent = this.loc;
  table.appendChild(tableRow);
  for (var n = 0; n < this.cookiesSoldPerHour.length; n++) {
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesSoldPerHour[n];
    tableRow.appendChild(tableData);
  }
  var tableDataTotal = document.createElement('td');
  tableDataTotal.textContent = this.totalCookiesSold;
  tableRow.appendChild(tableDataTotal);
};

// GENERATE TABLE FOOTER LOGIC----------------------------------------
function makeTableFooter() {
  var tFootTotal = document.createElement('td');
  tFootTotal.textContent = 'Total';
  var total = 0;
  table.appendChild(tFootTotal);
  var total = 0;
  for (var i = 0; i < businessHours.length; i++) {
    var storage = 0;
    for (var n = 0; n < allStores.length; n++) {
      storage += allStores[n].cookiesSoldPerHour[i];
    }
    var tFoot = document.createElement('td');
    tFoot.textContent = storage;
    table.appendChild(tFoot);
    total += storage;
  }
<<<<<<< HEAD
  var tTotal = document.createElement('td');
  tTotal.textContent = total;
  table.appendChild(tTotal);
=======
  var totalTotal = document.createElement('td');
  totalTotal.textContent = total;
  table.appendChild(totalTotal);
>>>>>>> 4593d08e7ffe52c43a7e475c3839ea85b6ab65df
}

Store.renderAllStores = function() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].makeTableRow();
  }
};
makeTableHeader();

// NEW STORE FORM LOGIC-----------------------------------
Store.addNewStore = function(event) {
  event.preventDefault();
  var newLocation = event.target.storeLocation.value;
  var newMinCust = event.target.minCust.value;
  var newMaxCust = event.target.maxCust.value;
  var newAvgUnitSale = event.target.avgUnitSale.value;
  new Store(newLocation, newMinCust, newMaxCust, newAvgUnitSale);
  table.textContent = '';
  makeTableHeader();
  Store.renderAllStores();
  makeTableFooter();
};

new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

storeForm.addEventListener('submit', Store.addNewStore);
makeTableFooter();

// DO NOT DELETE: this makes all the table rows/data in one fell swoop
// Store.prototype.makeTableRow = function() {
//   for (var i = 0; i < allStores.length; i++) {
//     var table = document.getElementById('table');
//     var tableRow = document.createElement('tr');
//     tableRow.textContent = allStores[i].loc;
//     table.appendChild(tableRow);
//     for (var n = 0; n < this.cookiesSoldPerHour.length; n++) {
//       var tableData = document.createElement('td');
//       tableData.textContent = allStores[i].cookiesSoldPerHour[n];
//       tableRow.appendChild(tableData);
//     }
//     var tableDataTotal = document.createElement('td');
//     tableDataTotal.textContent = allStores[i].totalCookiesSold;
//     tableRow.appendChild(tableDataTotal);
//   }
// };