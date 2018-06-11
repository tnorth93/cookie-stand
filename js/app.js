'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
var storePike = {
  minHourCust: 23,
  maxHourCust: 65,
  avgUnitSale: 6.3,
  storeHours: [],

  // uses a method of object to generate a random number of customers per hour
  randomCust: function(min, max) {
    min = Math.ceil(storePike.minHourCust);
    max = Math.floor(storePike.maxHourCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // calc and store simulated amounts of cookies sold or each hour at specific store using avg cookies purchased and random customers generated (for loop)
  unitsSold: function() {
    for ( var i = 0; i < 14; i++) {
      storePike.storeHours.push(Math.floor(storePike.randomCust() * storePike.avgUnitSale));
    }
  },

  // set UL LIs to results that have been stored in the storeHours array
  populateLi: function() {
    var ulElement = document.getElementById('pike');
    for (var i = 0; i < storePike.storeHours.length; i++) {
      // create list items in html doc
      var liEl = document.createElement('li');
      // use storeHours array to populate lis with selling data
      liEl.textContent = storePike.storeHours[i];
      // append the content to display in doc
      ulElement.appendChild(liEl);
    }
  }
};

storePike.randomCust();
storePike.unitsSold();
storePike.populateLi();

var storeAirport = {
  minHourCust: 3,
  maxHourCust: 24,
  avgUnitSale: 1.2,
};

var storeCenter = {
  minHourCust: 11,
  maxHourCust: 38,
  avgUnitSale: 3.7
};

var storeHill = {
  minHourCust: 20,
  maxHourCust: 38,
  avgUnitSale: 2.3
};

var storeAlki = {
  minHourCust: 2,
  maxHourCust: 16,
  avgUnitSale: 4.6,
};